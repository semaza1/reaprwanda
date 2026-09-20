/**
 * SITE CLONER
 *
 * Features:
 * - Clone one or many pages
 * - Preserve page routes
 * - Each page gets its own assets
 * - CSS, JS, images and fonts are downloaded locally
 * - CSS url() and @import references are rewritten
 * - Internal page links are rewritten after all pages are cloned
 * - Supports explicit routes
 * - Supports automatic crawling
 * - Works around Git Bash/MSYS path conversion on Windows
 *
 * Examples:
 *
 * Single page:
 *   node clone.js https://www.asyv.org/
 *
 * Selected pages:
 *   MSYS_NO_PATHCONV=1 node clone.js https://www.asyv.org/ \
 *     --routes / /blog /impact /careers /asyv-model /the-team
 *
 * Automatic crawling:
 *   node clone.js https://www.asyv.org/ --pages 20 --depth 2
 *
 * Custom output:
 *   node clone.js https://www.asyv.org/ --routes / /blog --output ./asyv-clone
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const archiver = require("archiver");

// ============================================================
// CLI
// ============================================================

const args = process.argv.slice(2);

const TARGET_URL =
  args.find((arg) => /^https?:\/\//i.test(arg)) ||
  "https://www.marinelayer.com/";

const parsedTarget = new URL(TARGET_URL);
const ORIGIN = parsedTarget.origin;

// ------------------------------------------------------------
// Windows Git Bash/MSYS path normalization
// ------------------------------------------------------------

function normalizeRouteArgument(route) {
  if (!route) return null;

  let value = String(route).trim();

  /*
   * Git Bash on Windows can convert:
   *
   *   /blog
   *
   * into:
   *
   *   C:/Program Files/Git/blog
   *
   * Convert that back into /blog.
   */

  if (
    process.platform === "win32" &&
    /^C:[/\\]Program Files[/\\]Git(?:[/\\]|$)/i.test(value)
  ) {
    value = value
      .replace(/^C:[/\\]Program Files[/\\]Git/i, "")
      .replace(/\\/g, "/");

    if (!value.startsWith("/")) {
      value = "/" + value;
    }

    if (value === "") {
      value = "/";
    }
  }

  // Windows backslashes -> URL slashes
  value = value.replace(/\\/g, "/");

  // Remove accidental localhost/file paths
  if (/^[a-zA-Z]:\//.test(value)) {
    return null;
  }

  if (!value.startsWith("/")) {
    value = "/" + value;
  }

  return normalizeRoute(value);
}

function normalizeRoute(route) {
  if (!route) return "/";

  let value = route.trim();

  if (!value.startsWith("/")) {
    value = "/" + value;
  }

  // Remove query/hash from routes
  value = value.split("?")[0].split("#")[0];

  // Collapse duplicate slashes
  value = value.replace(/\/+/g, "/");

  if (value.length > 1 && value.endsWith("/")) {
    value = value.slice(0, -1);
  }

  return value || "/";
}

function getFlagValue(flag) {
  const index = args.indexOf(flag);

  if (index === -1) {
    return null;
  }

  const value = args[index + 1];

  if (!value || value.startsWith("--")) {
    return null;
  }

  return value;
}

// ------------------------------------------------------------
// Output directory
// ------------------------------------------------------------

const outputFlag = getFlagValue("--output");

let positionalOutput = null;

const urlIndex = args.findIndex((arg) => /^https?:\/\//i.test(arg));

if (
  urlIndex !== -1 &&
  args[urlIndex + 1] &&
  !args[urlIndex + 1].startsWith("--")
) {
  positionalOutput = args[urlIndex + 1];
}

const OUT_DIR = path.resolve(
  outputFlag || positionalOutput || "./output"
);

// ------------------------------------------------------------
// Selected routes
// ------------------------------------------------------------

const routesIndex = args.indexOf("--routes");

let SELECTED_ROUTES = [];

if (routesIndex !== -1) {
  SELECTED_ROUTES = args
    .slice(routesIndex + 1)
    .filter((arg) => !arg.startsWith("--"))
    .map(normalizeRouteArgument)
    .filter(Boolean);

  SELECTED_ROUTES = [...new Set(SELECTED_ROUTES)];
}

// ------------------------------------------------------------
// Automatic crawling options
// ------------------------------------------------------------

const MAX_PAGES = Math.max(
  1,
  parseInt(getFlagValue("--pages") || "20", 10)
);

const MAX_DEPTH = Math.max(
  0,
  parseInt(getFlagValue("--depth") || "2", 10)
);

const USE_CRAWLER =
  SELECTED_ROUTES.length === 0;

// ============================================================
// Configuration
// ============================================================

const ASSET_DIRS = {
  css: "css",
  js: "js",
  img: "images",
  font: "fonts",
  other: "other",
};

const PAGE_EXTENSIONS = [
  ".html",
  ".htm",
  "",
];

const IGNORE_PATHS = [
  "/wp-admin",
  "/wp-login",
  "/admin",
  "/login",
  "/logout",
  "/api",
];

const SKIP_EXTENSIONS = [
  ".pdf",
  ".zip",
  ".rar",
  ".7z",
  ".mp4",
  ".webm",
  ".mov",
  ".avi",
  ".mp3",
  ".wav",
];

// route -> information about cloned page
const clonedPages = new Map();

// ============================================================
// Helpers
// ============================================================

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function normalizeLocalPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function extForUrl(urlString) {
  try {
    const parsed = new URL(urlString);

    const pathname = parsed.pathname;

    const ext = path.extname(pathname);

    return ext || "";
  } catch {
    return "";
  }
}

function categorize(urlString) {
  const ext = extForUrl(urlString).toLowerCase();

  if (ext === ".css") {
    return "css";
  }

  if (ext === ".js" || ext === ".mjs") {
    return "js";
  }

  if (
    [".woff", ".woff2", ".ttf", ".otf", ".eot"].includes(ext)
  ) {
    return "font";
  }

  if (
    [
      ".png",
      ".jpg",
      ".jpeg",
      ".gif",
      ".svg",
      ".webp",
      ".avif",
      ".ico",
      ".bmp",
      ".tiff",
      ".tif",
    ].includes(ext)
  ) {
    return "img";
  }

  return "other";
}

function safeFilename(urlString) {
  let parsed;

  try {
    parsed = new URL(urlString);
  } catch {
    return "file";
  }

  let base = path.basename(parsed.pathname);

  if (!base || base === "/") {
    base = "file";
  }

  base = base.replace(/[^a-zA-Z0-9._-]/g, "_");

  return base;
}

function makeUniqueFilename(dir, filename) {
  const parsed = path.parse(filename);

  let candidate = filename;
  let counter = 1;

  while (fs.existsSync(path.join(dir, candidate))) {
    candidate = `${parsed.name}_${counter}${parsed.ext}`;
    counter++;
  }

  return candidate;
}

function resolveUrl(raw, base) {
  if (!raw) {
    return null;
  }

  let value = String(raw).trim();

  value = value.replace(/^["']|["']$/g, "");

  if (
    value.startsWith("data:") ||
    value.startsWith("blob:") ||
    value.startsWith("javascript:") ||
    value.startsWith("#") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:")
  ) {
    return null;
  }

  try {
    const resolved = new URL(value, base);

    if (
      resolved.protocol !== "http:" &&
      resolved.protocol !== "https:"
    ) {
      return null;
    }

    return resolved.href;
  } catch {
    return null;
  }
}

function isSameOrigin(urlString) {
  try {
    return new URL(urlString).origin === ORIGIN;
  } catch {
    return false;
  }
}

function routeToUrl(route) {
  route = normalizeRoute(route);

  if (route === "/") {
    return `${ORIGIN}/`;
  }

  return `${ORIGIN}${route}`;
}

function urlToRoute(urlString) {
  try {
    const parsed = new URL(urlString);

    if (parsed.origin !== ORIGIN) {
      return null;
    }

    return normalizeRoute(parsed.pathname);
  } catch {
    return null;
  }
}

function shouldSkipPath(route) {
  if (!route) {
    return true;
  }

  const lower = route.toLowerCase();

  if (
    IGNORE_PATHS.some(
      (ignored) =>
        lower === ignored ||
        lower.startsWith(`${ignored}/`)
    )
  ) {
    return true;
  }

  const pathname = lower.split("?")[0];

  if (
    SKIP_EXTENSIONS.some((ext) =>
      pathname.endsWith(ext)
    )
  ) {
    return true;
  }

  return false;
}

// ============================================================
// Page folder mapping
// ============================================================

function getPageDirectory(route) {
  route = normalizeRoute(route);

  if (route === "/") {
    return OUT_DIR;
  }

  const cleanRoute = route.replace(/^\/+/, "");

  return path.join(
    OUT_DIR,
    ...cleanRoute.split("/")
  );
}

function getPageHtmlPath(route) {
  return path.join(
    getPageDirectory(route),
    "index.html"
  );
}

// ============================================================
// CSS processing
// ============================================================

async function processCss(
  requestCtx,
  cssText,
  cssUrl,
  pageContext,
  cssLocalDir
) {
  const urlRegex =
    /url\(\s*(['"]?)([^'")]+)\1\s*\)/g;

  const importRegex =
    /@import\s+(?:url\()?['"]?([^'")]+)['"]?\)?/g;

  const refs = new Set();

  let match;

  while ((match = urlRegex.exec(cssText))) {
    refs.add(match[2]);
  }

  while ((match = importRegex.exec(cssText))) {
    refs.add(match[1]);
  }

  let output = cssText;

  for (const ref of refs) {
    const resolved = resolveUrl(ref, cssUrl);

    if (!resolved) {
      continue;
    }

    const localRelative = await downloadAsset(
      requestCtx,
      resolved,
      pageContext
    );

    if (!localRelative) {
      continue;
    }

    /*
     * localRelative is relative to the page's root.
     *
     * CSS paths are relative to the CSS file itself,
     * therefore we calculate the path from the CSS directory.
     */

    const absoluteAssetPath = path.join(
      pageContext.pageDir,
      localRelative
    );

    const relativeFromCss = normalizeLocalPath(
      path.relative(
        cssLocalDir,
        absoluteAssetPath
      )
    );

    output = output.split(ref).join(relativeFromCss);
  }

  return output;
}

// ============================================================
// Asset downloading
// ============================================================

async function downloadAsset(
  requestCtx,
  assetUrl,
  pageContext
) {
  if (pageContext.downloaded.has(assetUrl)) {
    return pageContext.downloaded.get(assetUrl);
  }

  const kind = categorize(assetUrl);

  const assetDir = path.join(
    pageContext.pageDir,
    ASSET_DIRS[kind]
  );

  ensureDir(assetDir);

  let filename = safeFilename(assetUrl);

  filename = makeUniqueFilename(
    assetDir,
    filename
  );

  const absolutePath = path.join(
    assetDir,
    filename
  );

  const relativePath = normalizeLocalPath(
    path.relative(
      pageContext.pageDir,
      absolutePath
    )
  );

  try {
    const response = await requestCtx.get(
      assetUrl,
      {
        timeout: 30000,
        failOnStatusCode: false,
      }
    );

    if (!response.ok()) {
      console.warn(
        `  [skip] ${response.status()} ${assetUrl}`
      );

      pageContext.downloaded.set(
        assetUrl,
        null
      );

      return null;
    }

    const buffer = await response.body();

    fs.writeFileSync(
      absolutePath,
      buffer
    );

    pageContext.downloaded.set(
      assetUrl,
      relativePath
    );

    console.log(
      `  [ok] ${assetUrl}`
    );

    console.log(
      `       -> ${pageContext.route}/${relativePath}`
    );

    // --------------------------------------------------------
    // CSS recursion
    // --------------------------------------------------------

    if (kind === "css") {
      const cssText = buffer.toString("utf-8");

      const rewrittenCss =
        await processCss(
          requestCtx,
          cssText,
          assetUrl,
          pageContext,
          assetDir
        );

      fs.writeFileSync(
        absolutePath,
        rewrittenCss,
        "utf-8"
      );
    }

    return relativePath;
  } catch (error) {
    console.warn(
      `  [fail] ${assetUrl}: ${error.message}`
    );

    pageContext.downloaded.set(
      assetUrl,
      null
    );

    return null;
  }
}

// ============================================================
// Extract assets from page
// ============================================================

async function collectPageAssets(page) {
  return page.evaluate(() => {
    const refs = new Set();

    const add = (element, attribute) => {
      const value =
        element.getAttribute(attribute);

      if (value && value.trim()) {
        refs.add(value.trim());
      }
    };

    // CSS
    document
      .querySelectorAll(
        'link[rel="stylesheet"][href]'
      )
      .forEach((el) =>
        add(el, "href")
      );

    // JavaScript
    document
      .querySelectorAll("script[src]")
      .forEach((el) =>
        add(el, "src")
      );

    // Images
    document
      .querySelectorAll("img[src]")
      .forEach((el) =>
        add(el, "src")
      );

    // Video/audio/source
    document
      .querySelectorAll("source[src]")
      .forEach((el) =>
        add(el, "src")
      );

    document
      .querySelectorAll("video[poster]")
      .forEach((el) =>
        add(el, "poster")
      );

    // Icons
    document
      .querySelectorAll(
        'link[rel*="icon"][href]'
      )
      .forEach((el) =>
        add(el, "href")
      );

    // Manifest
    document
      .querySelectorAll(
        'link[rel="manifest"][href]'
      )
      .forEach((el) =>
        add(el, "href")
      );

    // srcset
    document
      .querySelectorAll(
        "img[srcset], source[srcset]"
      )
      .forEach((el) => {
        const srcset =
          el.getAttribute("srcset");

        if (!srcset) {
          return;
        }

        srcset
          .split(",")
          .forEach((part) => {
            const url =
              part.trim().split(/\s+/)[0];

            if (url) {
              refs.add(url);
            }
          });
      });

    // Inline style attributes
    document
      .querySelectorAll('[style*="url("]')
      .forEach((el) => {
        const style =
          el.getAttribute("style");

        const matches =
          style.match(
            /url\(([^)]+)\)/g
          ) || [];

        matches.forEach((match) => {
          const raw = match
            .slice(4, -1)
            .replace(/["']/g, "")
            .trim();

          if (raw) {
            refs.add(raw);
          }
        });
      });

    // Open Graph / metadata images
    document
      .querySelectorAll(
        'meta[property="og:image"][content], meta[name="twitter:image"][content]'
      )
      .forEach((el) =>
        add(el, "content")
      );

    return Array.from(refs);
  });
}

// ============================================================
// Rewrite asset references in DOM
// ============================================================

async function rewritePageAssets(
  page,
  refToLocal
) {
  await page.evaluate((map) => {
    const rewrite =
      (element, attribute) => {
        const raw =
          element.getAttribute(attribute);

        if (!raw) {
          return;
        }

        const trimmed = raw.trim();

        if (map[trimmed]) {
          element.setAttribute(
            attribute,
            map[trimmed]
          );
        }
      };

    // CSS
    document
      .querySelectorAll(
        'link[rel="stylesheet"][href]'
      )
      .forEach((el) =>
        rewrite(el, "href")
      );

    // JS
    document
      .querySelectorAll("script[src]")
      .forEach((el) =>
        rewrite(el, "src")
      );

    // Images
    document
      .querySelectorAll("img[src]")
      .forEach((el) =>
        rewrite(el, "src")
      );

    // Sources
    document
      .querySelectorAll("source[src]")
      .forEach((el) =>
        rewrite(el, "src")
      );

    // Video poster
    document
      .querySelectorAll("video[poster]")
      .forEach((el) =>
        rewrite(el, "poster")
      );

    // Icons
    document
      .querySelectorAll(
        'link[rel*="icon"][href]'
      )
      .forEach((el) =>
        rewrite(el, "href")
      );

    // Manifest
    document
      .querySelectorAll(
        'link[rel="manifest"][href]'
      )
      .forEach((el) =>
        rewrite(el, "href")
      );

    // srcset
    document
      .querySelectorAll(
        "img[srcset], source[srcset]"
      )
      .forEach((el) => {
        const srcset =
          el.getAttribute("srcset");

        if (!srcset) {
          return;
        }

        const rewritten = srcset
          .split(",")
          .map((part) => {
            const trimmed =
              part.trim();

            const pieces =
              trimmed.split(/\s+/);

            const originalUrl =
              pieces.shift();

            const descriptor =
              pieces.length
                ? ` ${pieces.join(" ")}`
                : "";

            const local =
              map[originalUrl];

            return (
              (local || originalUrl) +
              descriptor
            );
          })
          .join(", ");

        el.setAttribute(
          "srcset",
          rewritten
        );
      });

    // Inline style URLs
    document
      .querySelectorAll(
        '[style*="url("]'
      )
      .forEach((el) => {
        const style =
          el.getAttribute("style");

        if (!style) {
          return;
        }

        const rewritten =
          style.replace(
            /url\(([^)]+)\)/g,
            (match, inner) => {
              const raw = inner
                .replace(/["']/g, "")
                .trim();

              if (map[raw]) {
                return `url(${map[raw]})`;
              }

              return match;
            }
          );

        el.setAttribute(
          "style",
          rewritten
        );
      });

    // Remove crossorigin from local resources
    document
      .querySelectorAll(
        'link[href], script[src], img[src], source[src]'
      )
      .forEach((el) => {
        el.removeAttribute(
          "crossorigin"
        );
      });
  }, refToLocal);
}

// ============================================================
// Internal page links
// ============================================================

function getLocalPagePath(
  currentRoute,
  targetRoute
) {
  const currentHtml =
    getPageHtmlPath(currentRoute);

  const targetHtml =
    getPageHtmlPath(targetRoute);

  const currentDirectory =
    path.dirname(currentHtml);

  return normalizeLocalPath(
    path.relative(
      currentDirectory,
      targetHtml
    )
  ) || "index.html";
}

function rewriteInternalLinks(
  html,
  currentRoute
) {
  // We use a temporary parser-like transformation
  // through regex only for href values after the
  // HTML has already been serialized by Playwright.
  //
  // The actual route detection is handled carefully
  // so external URLs aren't touched.

  return html.replace(
    /(<a\b[^>]*\bhref\s*=\s*)(["'])(.*?)\2/gi,
    (full, prefix, quote, href) => {
      const originalHref =
        href.trim();

      if (
        !originalHref ||
        originalHref.startsWith("#") ||
        originalHref.startsWith("mailto:") ||
        originalHref.startsWith("tel:") ||
        originalHref.startsWith("javascript:")
      ) {
        return full;
      }

      let resolved;

      try {
        resolved = new URL(
          originalHref,
          routeToUrl(currentRoute)
        );
      } catch {
        return full;
      }

      if (resolved.origin !== ORIGIN) {
        return full;
      }

      const targetRoute =
        urlToRoute(resolved.href);

      if (!targetRoute) {
        return full;
      }

      if (!clonedPages.has(targetRoute)) {
        return full;
      }

      let localPath =
        getLocalPagePath(
          currentRoute,
          targetRoute
        );

      // Preserve hash
      if (resolved.hash) {
        localPath += resolved.hash;
      }

      return `${prefix}${quote}${localPath}${quote}`;
    }
  );
}

// ============================================================
// Auto scrolling
// ============================================================

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;

      const distance = 400;

      const timer =
        setInterval(() => {
          window.scrollBy(
            0,
            distance
          );

          totalHeight += distance;

          const maxHeight =
            document.body.scrollHeight -
            window.innerHeight;

          if (
            totalHeight >=
            maxHeight - 200
          ) {
            clearInterval(timer);

            window.scrollTo(
              0,
              0
            );

            resolve();
          }
        }, 150);
    });
  });
}

// ============================================================
// Navigation
// ============================================================

async function gotoWithRetry(
  page,
  url,
  attempts = 3
) {
  let lastError;

  for (
    let attempt = 1;
    attempt <= attempts;
    attempt++
  ) {
    try {
      await page.goto(url, {
        waitUntil:
          "domcontentloaded",
        timeout: 60000,
      });

      return;
    } catch (error) {
      lastError = error;

      console.warn(
        `  Navigation attempt ${attempt}/${attempts} failed`
      );

      console.warn(
        `  ${error.message}`
      );
    }
  }

  throw lastError;
}

// ============================================================
// Discover internal links
// ============================================================

async function discoverInternalLinks(
  page,
  currentUrl
) {
  const links =
    await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          "a[href]"
        )
      ).map((a) =>
        a.getAttribute("href")
      );
    });

  const discovered = [];

  for (const href of links) {
    if (!href) {
      continue;
    }

    const resolved =
      resolveUrl(
        href,
        currentUrl
      );

    if (!resolved) {
      continue;
    }

    if (!isSameOrigin(resolved)) {
      continue;
    }

    const route =
      urlToRoute(resolved);

    if (!route) {
      continue;
    }

    if (shouldSkipPath(route)) {
      continue;
    }

    discovered.push(route);
  }

  return [
    ...new Set(discovered),
  ];
}

// ============================================================
// Clone one page
// ============================================================

async function clonePage(
  page,
  requestCtx,
  route,
  depth
) {
  route = normalizeRoute(route);

  const pageUrl =
    routeToUrl(route);

  const pageDir =
    getPageDirectory(route);

  const htmlPath =
    getPageHtmlPath(route);

  console.log("");
  console.log(
    "============================================================"
  );
  console.log(
    `PAGE: ${route}`
  );
  console.log(
    `URL:  ${pageUrl}`
  );
  console.log(
    `DIR:  ${pageDir}`
  );
  console.log(
    "============================================================"
  );

  ensureDir(pageDir);

  for (const dir of Object.values(
    ASSET_DIRS
  )) {
    ensureDir(
      path.join(
        pageDir,
        dir
      )
    );
  }

  const pageContext = {
    route,
    pageDir,

    // IMPORTANT:
    // Every page gets its own asset map.
    downloaded: new Map(),
  };

  try {
    await gotoWithRetry(
      page,
      pageUrl
    );

    try {
      await page.waitForLoadState(
        "networkidle",
        {
          timeout: 15000,
        }
      );
    } catch {
      console.warn(
        "  Network did not become idle — continuing."
      );
    }

    console.log(
      "  Scrolling for lazy content..."
    );

    try {
      await autoScroll(page);
    } catch {
      console.warn(
        "  Auto-scroll failed — continuing."
      );
    }

    await page.waitForTimeout(
      1500
    );

    // --------------------------------------------------------
    // Discover internal links
    // --------------------------------------------------------

    const discoveredLinks =
      await discoverInternalLinks(
        page,
        pageUrl
      );

    // --------------------------------------------------------
    // Collect assets
    // --------------------------------------------------------

    const assetRefs =
      await collectPageAssets(
        page
      );

    console.log(
      `  Assets found: ${assetRefs.length}`
    );

    const refToLocal = {};

    for (const rawRef of assetRefs) {
      const resolved =
        resolveUrl(
          rawRef,
          pageUrl
        );

      if (!resolved) {
        continue;
      }

      const localPath =
        await downloadAsset(
          requestCtx,
          resolved,
          pageContext
        );

      if (localPath) {
        /*
         * IMPORTANT:
         *
         * The HTML contains the original raw URL.
         * Save a mapping for that exact value.
         */
        refToLocal[
          rawRef.trim()
        ] = localPath;

        /*
         * Also map absolute URL.
         *
         * Some dynamically-generated DOM attributes
         * may contain the resolved absolute URL.
         */
        refToLocal[
          resolved
        ] = localPath;
      }
    }

    // --------------------------------------------------------
    // Rewrite assets
    // --------------------------------------------------------

    console.log(
      "  Rewriting local asset paths..."
    );

    await rewritePageAssets(
      page,
      refToLocal
    );

    // --------------------------------------------------------
    // Capture HTML
    // --------------------------------------------------------

    let html =
      await page.content();

    // --------------------------------------------------------
    // Save
    // --------------------------------------------------------

    fs.writeFileSync(
      htmlPath,
      html,
      "utf-8"
    );

    clonedPages.set(
      route,
      {
        route,
        url: pageUrl,
        htmlPath,
        pageDir,
        discoveredLinks,
        depth,
      }
    );

    console.log(
      `  ✓ Saved ${htmlPath}`
    );

    return discoveredLinks;
  } catch (error) {
    console.error(
      `  ✗ Failed to clone ${route}`
    );

    console.error(
      `    ${error.message}`
    );

    return [];
  }
}

// ============================================================
// Crawl website
// ============================================================

async function crawlSite(
  page,
  requestCtx
) {
  const queue = [
    {
      route: "/",
      depth: 0,
    },
  ];

  const queued =
    new Set(["/"]);

  while (
    queue.length > 0 &&
    clonedPages.size < MAX_PAGES
  ) {
    const current =
      queue.shift();

    const route =
      normalizeRoute(
        current.route
      );

    const depth =
      current.depth;

    if (
      clonedPages.has(route)
    ) {
      continue;
    }

    if (
      depth > MAX_DEPTH
    ) {
      continue;
    }

    const links =
      await clonePage(
        page,
        requestCtx,
        route,
        depth
      );

    if (
      depth >= MAX_DEPTH
    ) {
      continue;
    }

    for (const link of links) {
      if (
        clonedPages.size +
          queue.length >=
        MAX_PAGES
      ) {
        break;
      }

      if (
        queued.has(link) ||
        clonedPages.has(link)
      ) {
        continue;
      }

      if (
        shouldSkipPath(link)
      ) {
        continue;
      }

      queued.add(link);

      queue.push({
        route: link,
        depth: depth + 1,
      });
    }
  }
}

// ============================================================
// Clone selected routes
// ============================================================

async function cloneSelectedRoutes(
  page,
  requestCtx
) {
  console.log("");
  console.log(
    "Selected routes:"
  );

  for (const route of SELECTED_ROUTES) {
    console.log(
      `  ${route} -> ${routeToUrl(route)}`
    );
  }

  for (const route of SELECTED_ROUTES) {
    await clonePage(
      page,
      requestCtx,
      route,
      0
    );
  }
}

// ============================================================
// Rewrite all internal links
// ============================================================

function rewriteAllClonedLinks() {
  console.log("");
  console.log(
    "Rewriting internal page links..."
  );

  for (const [
    route,
    pageInfo,
  ] of clonedPages.entries()) {
    if (
      !fs.existsSync(
        pageInfo.htmlPath
      )
    ) {
      continue;
    }

    let html =
      fs.readFileSync(
        pageInfo.htmlPath,
        "utf-8"
      );

    html =
      rewriteInternalLinks(
        html,
        route
      );

    fs.writeFileSync(
      pageInfo.htmlPath,
      html,
      "utf-8"
    );

    console.log(
      `  ✓ ${route}`
    );
  }
}

// ============================================================
// README
// ============================================================

function writeRepoExtras() {
  const gitignore = `node_modules/
.DS_Store
`;

  fs.writeFileSync(
    path.join(
      OUT_DIR,
      ".gitignore"
    ),
    gitignore,
    "utf-8"
  );

  const routes = [
    ...clonedPages.keys(),
  ];

  const routeList = routes
    .map(
      (route) =>
        `- \`${route}\``
    )
    .join("\n");

  const readme = `# Site Clone

Static clone of:

${TARGET_URL}

## Cloned Pages

${routeList}

## Folder Structure

Each page contains its own assets:

\`\`\`
page/
├── index.html
├── css/
├── js/
├── images/
├── fonts/
└── other/
\`\`\`

## Run Locally

Because some websites use JavaScript modules, it is recommended to serve the clone over HTTP:

\`\`\`bash
npx serve .
\`\`\`

Then open the URL shown by the server.

## Important

This is a static snapshot of the original website.

Features that depend on the original backend, API, authentication,
database, payments, forms, search services, CMS, or other server-side
systems may not work offline.

Cloned on:
${new Date().toISOString()}
`;

  fs.writeFileSync(
    path.join(
      OUT_DIR,
      "CLONE_README.md"
    ),
    readme,
    "utf-8"
  );
}

// ============================================================
// ZIP
// ============================================================

function zipDirectory(
  sourceDir,
  outputPath
) {
  return new Promise(
    (resolve, reject) => {
      const output =
        fs.createWriteStream(
          outputPath
        );

      const archive =
        archiver("zip", {
          zlib: {
            level: 9,
          },
        });

      output.on(
        "close",
        () => resolve()
      );

      archive.on(
        "error",
        (error) =>
          reject(error)
      );

      archive.pipe(output);

      archive.directory(
        sourceDir,
        false
      );

      archive.finalize();
    }
  );
}

// ============================================================
// Main
// ============================================================

async function main() {
  ensureDir(
    OUT_DIR
  );

  console.log("");
  console.log(
    "============================================================"
  );
  console.log(
    "                     SITE CLONER"
  );
  console.log(
    "============================================================"
  );

  console.log(
    `Source: ${TARGET_URL}`
  );

  console.log(
    `Output: ${OUT_DIR}`
  );

  if (USE_CRAWLER) {
    console.log(
      `Mode:   AUTOMATIC CRAWL`
    );

    console.log(
      `Pages:  ${MAX_PAGES}`
    );

    console.log(
      `Depth:  ${MAX_DEPTH}`
    );
  } else {
    console.log(
      `Mode:   SELECTED ROUTES`
    );

    console.log(
      `Routes: ${SELECTED_ROUTES.join(", ")}`
    );
  }

  console.log(
    "============================================================"
  );

  // ----------------------------------------------------------
  // Browser
  // ----------------------------------------------------------

  console.log(
    "\nLaunching Chromium..."
  );

  const browser =
    await chromium.launch();

  const context =
    await browser.newContext({
      viewport: {
        width: 1440,
        height: 900,
      },

      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0 Safari/537.36",
    });

  const page =
    await context.newPage();

  const requestCtx =
    context.request;

  // ----------------------------------------------------------
  // Clone
  // ----------------------------------------------------------

  if (USE_CRAWLER) {
    await crawlSite(
      page,
      requestCtx
    );
  } else {
    await cloneSelectedRoutes(
      page,
      requestCtx
    );
  }

  // ----------------------------------------------------------
  // Close browser
  // ----------------------------------------------------------

  await browser.close();

  // ----------------------------------------------------------
  // Rewrite internal links
  // ----------------------------------------------------------

  rewriteAllClonedLinks();

  // ----------------------------------------------------------
  // Extras
  // ----------------------------------------------------------

  writeRepoExtras();

  // ----------------------------------------------------------
  // ZIP
  // ----------------------------------------------------------

  console.log("");
  console.log(
    "Creating ZIP..."
  );

  const zipPath =
    `${OUT_DIR}.zip`;

  await zipDirectory(
    OUT_DIR,
    zipPath
  );

  // ----------------------------------------------------------
  // Summary
  // ----------------------------------------------------------

  console.log("");
  console.log(
    "============================================================"
  );

  console.log(
    "                         COMPLETE"
  );

  console.log(
    "============================================================"
  );

  console.log(
    `Pages cloned: ${clonedPages.size}`
  );

  console.log(
    `Output:       ${OUT_DIR}`
  );

  console.log(
    `ZIP:          ${zipPath}`
  );

  console.log("");
  console.log(
    "Pages:"
  );

  for (const route of clonedPages.keys()) {
    console.log(
      `  ✓ ${route}`
    );
  }

  console.log("");
  console.log(
    "To view the clone:"
  );

  console.log(
    `  cd "${OUT_DIR}"`
  );

  console.log(
    "  npx serve ."
  );

  console.log(
    "============================================================"
  );
}

// ============================================================
// Error handling
// ============================================================

main().catch((error) => {
  console.error("");
  console.error(
    "FATAL ERROR:"
  );

  console.error(
    error
  );

  process.exit(1);
});
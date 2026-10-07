// clone-gallery.js
// REAP Rwanda Gallery Bulk Downloader
// Run: node clone-gallery.js

const fs = require("fs");
const path = require("path");

// ===============================
// CONFIG
// ===============================

const START_URL = "https://reaprw.org/gallery/";

const OUTPUT_DIR = path.join(__dirname, "reap-gallery");

// ===============================
// HELPERS
// ===============================

function normalizeUrl(url, baseUrl) {
  try {
    return new URL(url, baseUrl).href;
  } catch {
    return null;
  }
}

function isImageUrl(url) {
  if (!url) return false;

  try {
    const pathname = new URL(url).pathname.toLowerCase();

    return [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".gif",
      ".avif",
    ].some((ext) => pathname.includes(ext));
  } catch {
    return false;
  }
}

function cleanFilename(filename) {
  return filename
    .replace(/[<>:"/\\|?*]/g, "_")
    .replace(/\s+/g, "_")
    .slice(0, 180);
}

function filenameFromUrl(imageUrl, index) {
  try {
    const parsed = new URL(imageUrl);

    let filename = path.basename(parsed.pathname);

    if (!filename || filename === "/") {
      filename = `reap-image-${index}.jpg`;
    }

    return `${String(index).padStart(4, "0")}-${cleanFilename(filename)}`;
  } catch {
    return `${String(index).padStart(4, "0")}-reap-image.jpg`;
  }
}

// ===============================
// FETCH PAGE
// ===============================

async function fetchPage(url) {
  console.log(`\n🌐 Fetching: ${url}`);

  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  return await response.text();
}

// ===============================
// EXTRACT IMAGES
// ===============================

function extractImages(html, pageUrl) {
  const images = new Set();

  // img src
  const srcRegex = /<img[^>]+src=["']([^"']+)["']/gi;

  for (const match of html.matchAll(srcRegex)) {
    const url = normalizeUrl(match[1], pageUrl);

    if (isImageUrl(url)) {
      images.add(url);
    }
  }

  // Lazy-loaded images
  const lazyRegex =
    /<img[^>]+(?:data-src|data-lazy-src|data-original)=["']([^"']+)["']/gi;

  for (const match of html.matchAll(lazyRegex)) {
    const url = normalizeUrl(match[1], pageUrl);

    if (isImageUrl(url)) {
      images.add(url);
    }
  }

  // srcset
  const srcsetRegex = /(?:srcset|data-srcset)=["']([^"']+)["']/gi;

  for (const match of html.matchAll(srcsetRegex)) {
    const candidates = match[1]
      .split(",")
      .map((item) => item.trim().split(/\s+/)[0]);

    for (const candidate of candidates) {
      const url = normalizeUrl(candidate, pageUrl);

      if (isImageUrl(url)) {
        images.add(url);
      }
    }
  }

  // Links directly pointing to images
  const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;

  for (const match of html.matchAll(linkRegex)) {
    const url = normalizeUrl(match[1], pageUrl);

    if (isImageUrl(url)) {
      images.add(url);
    }
  }

  return [...images];
}

// ===============================
// FIND NEXT PAGE
// ===============================

function findNextPage(html, pageUrl) {
  const candidates = [];

  // rel="next"
  const relNextRegex =
    /<link[^>]+rel=["']next["'][^>]+href=["']([^"']+)["']/gi;

  for (const match of html.matchAll(relNextRegex)) {
    candidates.push(match[1]);
  }

  // Next link
  const nextRegex =
    /<a[^>]+href=["']([^"']+)["'][^>]*>[\s\S]*?(?:Next|›|»|→)[\s\S]*?<\/a>/gi;

  for (const match of html.matchAll(nextRegex)) {
    candidates.push(match[1]);
  }

  for (const candidate of candidates) {
    const next = normalizeUrl(candidate, pageUrl);

    if (next && next !== pageUrl) {
      return next;
    }
  }

  return null;
}

// ===============================
// DOWNLOAD IMAGE
// ===============================

async function downloadImage(url, index) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154 Safari/537.36",
        Referer: START_URL,
      },
    });

    if (!response.ok) {
      console.log(`❌ ${response.status}: ${url}`);
      return false;
    }

    const contentType = response.headers.get("content-type") || "";

    if (!contentType.startsWith("image/")) {
      console.log(`⚠️ Not an image: ${url}`);
      return false;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const filename = filenameFromUrl(url, index);
    const destination = path.join(OUTPUT_DIR, filename);

    fs.writeFileSync(destination, buffer);

    console.log(
      `✅ ${filename} — ${Math.round(buffer.length / 1024)} KB`
    );

    return true;
  } catch (error) {
    console.log(`❌ Failed: ${url}`);
    console.log(`   ${error.message}`);

    return false;
  }
}

// ===============================
// MAIN
// ===============================

async function main() {
  console.log("======================================");
  console.log(" REAP RW GALLERY DOWNLOADER");
  console.log("======================================");

  console.log(`Source: ${START_URL}`);
  console.log(`Output: ${OUTPUT_DIR}`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allImages = new Set();
  const visitedPages = new Set();

  let currentPage = START_URL;
  let pageNumber = 0;

  // ===============================
  // CRAWL PAGES
  // ===============================

  while (currentPage && pageNumber < 50) {
    if (visitedPages.has(currentPage)) {
      break;
    }

    visitedPages.add(currentPage);
    pageNumber++;

    try {
      const html = await fetchPage(currentPage);

      const images = extractImages(html, currentPage);

      console.log(`📸 Found ${images.length} images on this page`);

      images.forEach((image) => allImages.add(image));

      const nextPage = findNextPage(html, currentPage);

      if (!nextPage) {
        break;
      }

      currentPage = nextPage;
    } catch (error) {
      console.log(`❌ Page error: ${error.message}`);
      break;
    }
  }

  // ===============================
  // DOWNLOAD
  // ===============================

  console.log("\n======================================");
  console.log(`Pages scanned: ${pageNumber}`);
  console.log(`Images found: ${allImages.size}`);
  console.log("======================================\n");

  if (allImages.size === 0) {
    console.log("⚠️ No images were found.");
    console.log(
      "The REAP gallery may be loading its images through JavaScript."
    );
    console.log(
      "If that happens, we'll use a browser-based Playwright version."
    );
    return;
  }

  let successful = 0;
  let failed = 0;

  const images = [...allImages];

  for (let i = 0; i < images.length; i++) {
    const success = await downloadImage(images[i], i + 1);

    if (success) {
      successful++;
    } else {
      failed++;
    }

    // Don't hammer the server
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  console.log("\n======================================");
  console.log(" DOWNLOAD COMPLETE");
  console.log("======================================");
  console.log(`Downloaded: ${successful}`);
  console.log(`Failed:     ${failed}`);
  console.log(`Folder:     ${OUTPUT_DIR}`);
  console.log("======================================");
}

main().catch((error) => {
  console.error("\n💥 Fatal error:");
  console.error(error);
});
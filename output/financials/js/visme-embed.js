/* eslint-disable no-var, @typescript-eslint/no-this-alias */
/* global window, document */

if (typeof visme === 'undefined') {
  var visme = {
    constants: {
      FPS60: 16,
      DELAY_BEFORE_CHECKING_REPLACING_VISME_DIVS_TO_IFRAMES_MS: 1000,
      DELAY_BEFORE_UPDATING_REPLACED_IFRAME_SIZE_MS: 0,
      DEBOUNCED_UPDATING_RESPONSEIVE_SIZE_DELAY_MS: 300,
      TOP_LEVEL_UPDATE_DIMENSIONS_MESSAGE_TYPE: '@visme::TOP_LEVEL_UPDATE_DIMENSIONS'
    },
    data: [], // { width, height }
    isChangedOrientation: false,
    isInited: false,
    isInitOnReadyFired: false,
    loaderCleanupByWindow: new WeakMap(),
    initOnReady() {
      if (visme.isInitOnReadyFired) {
        return
      }

      visme.onInit(window, visme.init)
    },
    onInit(element, func) {
      var canInitNow =
        element.document &&
        (element.document.readyState === 'complete' ||
          element.document.readyState === 'interactive')
      if (canInitNow) {
        func()
        return
      }

      visme.addEvent(element, 'load', func)
      if (!element.document) {
        return
      }

      visme.addEvent(element.document, 'DOMContentLoaded', func)
      var readyStateChange = function () {
        if (element.document.readyState === 'complete') {
          func()
          visme.passDimensions()
        }
      }
      visme.addEvent(element.document, 'readystatechange', readyStateChange)
    },
    init() {
      if (visme.isInited) {
        return
      }
      visme.isInited = true
      visme.setupVisme()
      visme.addEvent(window, 'orientationchange', visme.onOrientationChangeHandler)
      visme.addEvent(window, 'resize', visme.debouncedUpdateResponsiveSize)
      visme.addEvent(window, 'message', visme.onMessageHandler, false) // Listen to message from child window
      visme.addEvent(window, 'scroll', visme.passDimensions)
      visme.addEvent(window, 'resize', visme.debouncedPassDimensions)
      visme.addEvent(window, 'orientationchange', visme.debouncedPassDimensions)
      visme.mountIframesLoaderOverlay(document)
    },
    setupVisme() {
      var vismeDivs = document.getElementsByClassName('visme_d')
      var vismeDivsForSetUp = [] // { vismeDiv, width }
      for (var i = 0; i < vismeDivs.length; i++) {
        var vismeDiv = vismeDivs[i]
        var width = visme.getComputedSizeStyle(vismeDiv, 'width')
        var isVismeForm = Boolean(vismeDiv.getAttribute('data-form-id'))
        if (width !== 0 && !isVismeForm) {
          vismeDivsForSetUp.push({
            vismeDiv,
            width
          })
        }
      }

      var vismeDataLength = visme.data.length
      for (var index = 0; index < vismeDivsForSetUp.length; index++) {
        var meta = vismeDivsForSetUp[index]
        visme.setUpVismeEl(meta.vismeDiv, index + vismeDataLength, meta.width)
      }

      setTimeout(
        visme.setupVisme,
        visme.constants.DELAY_BEFORE_CHECKING_REPLACING_VISME_DIVS_TO_IFRAMES_MS
      )
    },
    setUpVismeEl(vismeDiv, index, width) {
      var vismeIframe = document.createElement('IFRAME')
      var vismeOrigin = visme.getOrigin(vismeDiv)
      var vismePrefix = vismeDiv.getAttribute('data-prefix') || ''
      var isFormsProject = vismeDiv.getAttribute('data-forms') === 'true'
      var iframeStyles = vismeDiv.getAttribute('data-iframe-style') || ''
      vismeIframe.style.cssText = iframeStyles

      var route = '/_embed/' + vismeDiv.getAttribute('data-url') + '?responsive=1'

      if (isFormsProject) {
        route = '/formsPlayer/_embed/' + vismeDiv.getAttribute('data-url')

        vismeIframe.setAttribute('webkitallowfullscreen', true)
        vismeIframe.setAttribute('mozallowfullscreen', true)
        vismeIframe.setAttribute('allowFullScreen', true)
      }

      vismeIframe.setAttribute('src', vismeOrigin + vismePrefix + route)
      vismeIframe.setAttribute('title', vismeDiv.getAttribute('data-title'))
      vismeIframe.style.border = 'none'
      vismeIframe.className = 'visme'
      vismeIframe.dataset.projectid = vismeDiv.getAttribute('data-url')

      if (!visme.data[index]) {
        visme.data[index] = {}
      }
      visme.data[index].isFullHeight = vismeDiv.getAttribute('data-full-h') === 'true'

      visme.data[index].height = visme.data[index].isFullHeight
        ? '100'
        : vismeDiv.getAttribute('data-h')
      visme.data[index].width = vismeDiv.getAttribute('data-w')

      vismeIframe.setAttribute('width', width)
      if (navigator.platform.match(/iPhone|iPod|iPad/)) {
        vismeIframe.setAttribute('scrolling', 'no')
      }
      vismeIframe.style.width = width + 'px'
      if (visme.data[index].height && visme.data[index].width && !visme.data[index].isFullHeight) {
        vismeIframe.setAttribute(
          'height',
          visme.data[index].height * (parseInt(width) / visme.data[index].width)
        )
      }

      vismeIframe.setAttribute('allowfullscreen', true)
      vismeIframe.setAttribute('webkitallowfullscreen', true)
      vismeIframe.setAttribute('mozallowfullscreen', true)
      vismeIframe.setAttribute('allow', 'local-network-access')
      vismeDiv.parentNode.replaceChild(vismeIframe, vismeDiv)
      visme.mountIframesLoaderOverlay(document, vismeIframe)
      visme.onInit(vismeIframe.contentWindow, function () {
        setTimeout(
          visme.updateResponsiveSizeEl,
          visme.constants.DELAY_BEFORE_UPDATING_REPLACED_IFRAME_SIZE_MS,
          vismeIframe,
          index
        )
      })
      visme.addEvent(visme.getScrollParent(vismeIframe), 'scroll', visme.passDimensions)
    },
    updateResponsiveSize() {
      var vismeIframes = document.getElementsByClassName('visme')
      for (var i = 0; i < vismeIframes.length; i++) {
        visme.updateResponsiveSizeEl(vismeIframes[i], i)
      }
      visme.isChangedOrientation = false
    },
    updateResponsiveSizeEl(vismeIframe, index) {
      if (!visme.data[index]) {
        return
      }
      vismeIframe.style.overflow = 'hidden'
      var elementWidth = visme.data[index].width
      var elementHeight = visme.data[index].height
      var isFullHeight = visme.data[index].isFullHeight

      var width = visme.getComputedSizeStyle(vismeIframe, 'width')
      var paddingLeft = visme.getComputedSizeStyle(vismeIframe, 'padding-left')
      var paddingRight = visme.getComputedSizeStyle(vismeIframe, 'padding-right')
      var elementWidthWithoutPaddings = width - paddingLeft - paddingRight
      if (elementWidthWithoutPaddings <= 0) {
        elementWidthWithoutPaddings = width
      }

      var ratio = elementWidthWithoutPaddings / elementWidth
      vismeIframe.width = elementWidthWithoutPaddings
      vismeIframe.style.width = elementWidthWithoutPaddings + 'px'

      if (elementHeight && !isFullHeight) {
        vismeIframe.height = parseInt(elementHeight * ratio)
      } else {
        vismeIframe.style.height = elementHeight + 'vh'
      }

      if (visme.isChangedOrientation) {
        var src = vismeIframe.getAttribute('src')
        vismeIframe.setAttribute('src', '')
        vismeIframe.setAttribute('src', src)
        visme.isChangedOrientation = false
      }

      //  vismeIframe.contentWindow.postMessage('{"type":"embed-iframe", "width":"' + x[index].width + 'px", "height":"' + x[index].height + 'px" }', '*');
    },
    getOrigin(iframeDestination) {
      var domain = iframeDestination.getAttribute('data-domain') || 'my'
      var isDev = domain === 'visme4'
      var isFileOrigin = window.location.origin === 'file://'
      var protocol = 'https://'
      if (isFileOrigin) {
        protocol = isDev ? 'http://' : 'https://'
      }

      return protocol + domain + (isDev ? '' : '.visme.co')
    },
    addEvent(obj, type, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(type, fn, false)
      } else if (obj.attachEvent) {
        obj['e' + type + fn] = fn
        obj[type + fn] = function () {
          obj['e' + type + fn](window.event)
        }
        obj.attachEvent('on' + type, obj[type + fn])
      } else {
        obj['on' + type] = obj['e' + type + fn]
      }
    },
    removeEvent(obj, type, fn) {
      if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false)
      } else if (obj.detachEvent) {
        obj.detachEvent('on' + type, obj[type + fn])
        obj[type + fn] = null
        obj['e' + type + fn] = null
      } else {
        obj['on' + type] = null
      }
    },
    debounce(func, wait) {
      var timeout
      return function () {
        var context = this
        var args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    },
    getParent(element, parentLevel) {
      var result = element
      while (parentLevel--) {
        if (result && result.parentNode) {
          result = result.parentNode
        } else {
          result = null
          break
        }
      }

      return result
    },
    getComputedSizeStyle(element, styleName) {
      var maxParentLevel = 2
      var style = 0
      for (
        var level = 1;
        level <= maxParentLevel && (isNaN(style) || style === 0 || style === 'auto');
        level++
      ) {
        var parent = visme.getParent(element, level)
        if (parent === null) {
          style = 0
          break
        }

        var strategies = [
          function () {
            return Number(
              window.getComputedStyle(parent, null).getPropertyValue(styleName).replace('px', '')
            )
          },
          function () {
            return Number(parent.style[styleName].replace('px', ''))
          },
          function () {
            return Number(parent.currentStyle[styleName].replace('px', ''))
          }
        ]

        for (var k = 0; k < strategies.length && (isNaN(style) || style === 0); k++) {
          try {
            style = strategies[k]()
          } catch {
            style = 0
          }
        }
      }

      return style
    },
    passDimensions() {
      var message = ''
      var vismeIframes = document.querySelectorAll('iframe.visme')
      var embeddedProjectIframe = document.querySelector('#embedded-project-iframe')

      if (vismeIframes.length !== 0) {
        for (var i = 0; i < vismeIframes.length; i++) {
          message = visme.createPassDimensionsMessage(vismeIframes[i])
          vismeIframes[i].contentWindow.postMessage(message, '*')
        }
      }
      if (embeddedProjectIframe) {
        message = visme.createPassDimensionsMessage(embeddedProjectIframe)
        embeddedProjectIframe.contentWindow.postMessage(message, '*')
      }
    },
    createPassDimensionsMessage(iframe) {
      var dimensions = {
        window: {
          pageYOffset: window.pageYOffset,
          innerHeight: window.innerHeight
        },
        document: {
          body: {
            scrollTop: 0,
            scrollHeight: 0,
            offsetHeight: 0
          },
          documentElement: {
            scrollHeight: 0,
            offsetHeight: 0,
            scrollTop: 0,
            clientWidth: 0,
            clientHeight: 0
          }
        },
        iframe: {
          offsetTop: 0,
          offsetHeight: 0
        },
        scrollParent: {
          scrollTop: 0,
          scrollHeight: 0
        }
      }

      if (document.body) {
        dimensions.document.body.scrollTop = document.body.scrollTop
        dimensions.document.body.scrollHeight = document.body.scrollHeight
        dimensions.document.body.offsetHeight = document.body.offsetHeight
      }
      if (document.documentElement) {
        dimensions.document.documentElement.scrollHeight = document.documentElement.scrollHeight
        dimensions.document.documentElement.offsetHeight = document.documentElement.offsetHeight
        dimensions.document.documentElement.scrollTop = document.documentElement.scrollTop
        dimensions.document.documentElement.clientWidth = document.documentElement.clientWidth
        dimensions.document.documentElement.clientHeight = document.documentElement.clientHeight
      }

      var scrollParent = visme.getScrollParent(iframe)
      if (scrollParent !== window) {
        dimensions.scrollParent.scrollTop = scrollParent.scrollTop
        dimensions.scrollParent.scrollHeight = scrollParent.scrollHeight
      }
      dimensions.iframe.offsetTop = iframe.offsetTop
      dimensions.iframe.offsetHeight = iframe.offsetHeight
      return JSON.stringify({
        type: visme.constants.TOP_LEVEL_UPDATE_DIMENSIONS_MESSAGE_TYPE,
        payload: dimensions
      })
    },
    getScrollParent(node) {
      // eslint-disable-next-line no-undef
      var isElement = node && node.nodeType === Node.ELEMENT_NODE
      var overflowY = isElement && window.getComputedStyle(node).overflowY
      var isScrollable =
        (overflowY === 'scroll' || overflowY === 'auto') && node.scrollHeight > node.clientHeight

      if (!node) {
        return null
      } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
        return node
      }

      return visme.getScrollParent(node.parentNode) || window
    },
    getIframeElementFromEventWithProjectId(e) {
      var key = e.message ? 'message' : 'data'
      var data = e[key]
      var vismeIframes = document.getElementsByClassName('visme')
      var i
      for (i = 0; i < vismeIframes.length; i++) {
        var isEqualProjectId =
          vismeIframes[i].dataset.projectid.toString() === data.projectid.toString()
        if (isEqualProjectId || vismeIframes[i].contentWindow === e.source) {
          return vismeIframes[i]
        }
      }
      return document.getElementById('embedded-project-iframe')
    },
    onMessageHandler(e) {
      if (e.origin.indexOf('visme') === -1) {
        return
      }
      var key = e.message ? 'message' : 'data'
      var data = e[key]
      var targetVismeIframe

      if (data.event === 'embedLoadingStarted') {
        const loaderCleanup = visme.loaderCleanupByWindow.get(e.source)
        if (loaderCleanup) {
          loaderCleanup()
          return
        }
      }
      if (data.event === 'title') {
        targetVismeIframe = visme.getIframeElementFromEventWithProjectId(e)
        if (targetVismeIframe) {
          targetVismeIframe.title = data.title
        }
      }
      if (data.event === 'hyperlink' && data.target === 'same_window') {
        window.location = data.args
      }
      if (data.event === 'scrollto') {
        targetVismeIframe = visme.getIframeElementFromEventWithProjectId(e)

        if (!targetVismeIframe) {
          return
        }

        var scrollParent = visme.getScrollParent(targetVismeIframe)
        var scrollParentTop = 0
        if (scrollParent !== window) {
          scrollParentTop = scrollParent.getBoundingClientRect().top + window.scrollY
        }
        var targetVismeOffsetTop = targetVismeIframe.getBoundingClientRect().top + window.scrollY
        var scrollTopRelativeToScrollParentTop = data.top + targetVismeOffsetTop - scrollParentTop

        scrollParent.scrollTo({ top: scrollTopRelativeToScrollParentTop, behavior: 'smooth' })
      }
    },
    isVismeEmbedIframe(el) {
      if (!el || el.tagName !== 'IFRAME') {
        return false
      }
      const raw = el.getAttribute('src')
      if (!raw) {
        return false
      }

      const u = new URL(raw, document.baseURI)
      const host = u.hostname.toLowerCase()
      const path = u.pathname

      const isOurHost = host.endsWith('.visme.co')

      const isEmbedPath = path.startsWith('/_embed/') || path.startsWith('/formsPlayer/_embed/')

      return isOurHost && isEmbedPath
    },
    measureOffsetContext(root) {
      const docEl = document.documentElement
      const scrollEl = document.scrollingElement || docEl
      const isDocRoot =
        !root || root === window || root === document || root === document.body || root === docEl

      if (isDocRoot) {
        return {
          rectTop: 0,
          rectLeft: 0,
          scrollTop: window.pageYOffset || scrollEl.scrollTop || 0,
          scrollLeft: window.pageXOffset || scrollEl.scrollLeft || 0,
          borderTop: 0,
          borderLeft: 0
        }
      }

      const r = root.getBoundingClientRect()
      return {
        rectTop: r.top,
        rectLeft: r.left,
        scrollTop: root.scrollTop,
        scrollLeft: root.scrollLeft,
        borderTop: root.clientTop || 0,
        borderLeft: root.clientLeft || 0
      }
    },
    mountIframesLoaderOverlay(document, vismeIframe) {
      const listIframes = vismeIframe
        ? [vismeIframe]
        : Array.from(document.querySelectorAll('iframe[src]'))

      listIframes
        .filter(
          el =>
            el.id === 'embedded-project-iframe' ||
            el.classList.contains('visme') ||
            el.dataset.projectid ||
            visme.isVismeEmbedIframe(el)
        )
        .forEach(el => visme.createLoaderForIframe(document, el))
    },
    createLoaderForIframe(document, iframe) {
      var existingLoader = iframe.getAttribute('data-visme-loader-created')
      if (existingLoader) {
        return
      }

      iframe.setAttribute('data-visme-loader-created', 'true')

      var style = document.createElement('style')
      style.textContent = `
    .visme-loader {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }
    .visme-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(0,0,0,.2);
      border-top-color: rgba(0,0,0,.6);
      border-radius: 50%;
      animation: visme-spin .8s linear infinite;
    }
    @keyframes visme-spin {
      to { transform: rotate(360deg); }
    }
  `
      document.head.appendChild(style)

      var overlay = document.createElement('div')
      overlay.className = 'visme-loader'
      overlay.innerHTML = '<div class="visme-spinner"></div>'
      overlay.setAttribute('data-iframe-id', iframe.id || 'embedded-project-iframe')
      const container = iframe.parentElement || iframe.offsetParent || document.body
      const scroller = visme.getScrollParent(iframe) || document.documentElement
      container.appendChild(overlay)

      var syncOverlayToIframe = () => {
        const iframeRect = iframe.getBoundingClientRect()
        var root = overlay.offsetParent || document.documentElement
        const { rectTop, rectLeft, scrollTop, scrollLeft, borderTop, borderLeft } =
          visme.measureOffsetContext(root)
        const scrollerRect =
          scroller === document.body || scroller === document.documentElement || scroller === window
            ? { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }
            : scroller.getBoundingClientRect()

        overlay.style.top = iframeRect.top - rectTop + scrollTop - borderTop + 'px'
        overlay.style.left = iframeRect.left - rectLeft + scrollLeft - borderLeft + 'px'
        overlay.style.width = iframeRect.width + 'px'
        overlay.style.height = iframeRect.height + 'px'

        const zi = parseInt(window.getComputedStyle(iframe).zIndex, 10)
        overlay.style.zIndex = String(isNaN(zi) ? 1 : zi + 1)

        const left = Math.max(iframeRect.left, scrollerRect.left)
        const top = Math.max(iframeRect.top, scrollerRect.top)
        const right = Math.min(iframeRect.right, scrollerRect.right)
        const bottom = Math.min(iframeRect.bottom, scrollerRect.bottom)
        overlay.style.opacity = right <= left || bottom <= top ? '0' : '1'
      }

      syncOverlayToIframe()
      var ro = new window.ResizeObserver(syncOverlayToIframe)
      ro.observe(iframe)
      visme.addEvent(window, 'resize', syncOverlayToIframe)
      visme.addEvent(visme.getScrollParent(iframe), 'scroll', syncOverlayToIframe)
      var timeoutId = null
      var cleanup = () => {
        if (timeoutId !== null) {
          clearTimeout(timeoutId)
          timeoutId = null
        }
        overlay.remove()
        ro.disconnect()
        visme.removeEvent(window, 'resize', syncOverlayToIframe)
        visme.removeEvent(visme.getScrollParent(iframe), 'scroll', syncOverlayToIframe)
        style.remove()
        iframe.removeAttribute('data-visme-loader-created')
      }
      visme.loaderCleanupByWindow.set(iframe.contentWindow, cleanup)
      iframe.addEventListener('load', () => window.requestAnimationFrame(cleanup), { once: true })
      iframe.addEventListener('error', () => window.requestAnimationFrame(cleanup), { once: true })

      const MAX_IFRAME_LOADING_MS = 20000
      timeoutId = setTimeout(() => {
        window.requestAnimationFrame(cleanup)
      }, MAX_IFRAME_LOADING_MS)
    },
    onOrientationChangeHandler() {
      visme.isChangedOrientation = true
      visme.debouncedUpdateResponsiveSize()
    }
  }
  visme.debouncedUpdateResponsiveSize = visme.debounce(
    visme.updateResponsiveSize,
    visme.constants.DEBOUNCED_UPDATING_RESPONSEIVE_SIZE_DELAY_MS
  )
  visme.debouncedPassDimensions = visme.debounce(visme.passDimensions, visme.constants.FPS60)

  visme.initOnReady()
}
/* eslint-enable no-var, @typescript-eslint/no-this-alias */

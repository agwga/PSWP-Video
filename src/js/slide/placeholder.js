import {
  createElement,
  setWidthHeight,
  toTransformString,
} from "../util/util.js";

class Placeholder {
  /**
   * @param {string | undefined} contentType
   * @param {string | false} contentSrc
   * @param {HTMLElement} container
   */
  constructor(contentType, contentSrc, container) {
    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)
    /** @type {HTMLImageElement | HTMLVideoElement | HTMLDivElement | null} */
    this.element = createElement(
      "pswp__img pswp__img--placeholder",
      // imageSrc ? "img" : "video",
      contentType == undefined
        ? "img"
        : contentType == "video"
        ? "video"
        : "div",
      container
    );

    if (contentSrc) {
      const imgEl = /** @type {HTMLImageElement} */ (this.element);
      imgEl.decoding = "async";
      imgEl.alt = "";
      imgEl.src = contentSrc;
      imgEl.setAttribute("role", "presentation");
    }

    // if (contentSrc) {
    //   if (contentType == "video") {
    //     const videoEl = /** @type {HTMLVideoElement} */ (this.element);
    //     videoEl.setAttribute("muted", "muted");
    //     videoEl.setAttribute("autoplay", "");
    //     videoEl.setAttribute("loop", "");
    //     videoEl.setAttribute("playsInline", "");
    //     videoEl.src = contentSrc;
    //   } else if (contentType == undefined) {
    //     const imgEl = /** @type {HTMLImageElement} */ (this.element);
    //     imgEl.decoding = "async";
    //     imgEl.alt = "";
    //     imgEl.src = contentSrc;
    //     imgEl.setAttribute("role", "presentation");
    //   }
    // }

    this.element.setAttribute("aria-hidden", "true");
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }

    if (this.element.tagName === "IMG") {
      // Use transform scale() to modify img placeholder size
      // (instead of changing width/height directly).
      // This helps with performance, specifically in iOS15 Safari.
      setWidthHeight(this.element, 250, "auto");
      this.element.style.transformOrigin = "0 0";
      this.element.style.transform = toTransformString(0, 0, width / 250);
    } else {
      setWidthHeight(this.element, width, height);
    }
  }

  destroy() {
    if (this.element?.parentNode) {
      this.element.remove();
    }
    this.element = null;
  }
}

export default Placeholder;

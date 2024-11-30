import {
  createElement,
  setWidthHeight,
  toTransformString,
} from "../util/util.js";

class Placeholder {
  /**
   * @param {string | undefined} contentType
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  constructor(contentType, imageSrc, container) {
    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)
    /** @type {HTMLImageElement | HTMLVideoElement | null} */
    this.element = createElement(
      contentType == undefined
        ? "pswp__img pswp__img--placeholder"
        : "pswp__img pswp__img--placeholder pswp_video pswp__video--placeholder",
      contentType == undefined ? "img" : "video",
      container
    );

    // if (imageSrc) {
    //   const videoEl = /** @type {HTMLVideoElement} */ (this.element);
    //   videoEl.src = imageSrc;
    // }
    if (imageSrc) {
      if (contentType == undefined) {
        const imgEl = /** @type {HTMLImageElement} */ (this.element);
        imgEl.decoding = "async";
        imgEl.alt = "";
        imgEl.src = imageSrc;
        imgEl.setAttribute("role", "presentation");
      } else {
        const videoEl = /** @type {HTMLVideoElement} */ (this.element);
        videoEl.src = imageSrc;
        videoEl.setAttribute("role", "presentation");
      }
    }

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

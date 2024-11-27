export default Placeholder;
declare class Placeholder {
    /**
     * @param {string | undefined} contentType
     * @param {string | false} contentSrc
     * @param {HTMLElement} container
     */
    constructor(contentType: string | undefined, contentSrc: string | false, container: HTMLElement);
    /** @type {HTMLImageElement | HTMLVideoElement | HTMLDivElement | null} */
    element: HTMLImageElement | HTMLVideoElement | HTMLDivElement | null;
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width: number, height: number): void;
    destroy(): void;
}

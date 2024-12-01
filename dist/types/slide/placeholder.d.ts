export default Placeholder;
declare class Placeholder {
    /**
     * @param {string | undefined} contentType
     * @param {string | string} imageSrc
     * @param {HTMLElement} container
     */
    constructor(contentType: string | undefined, imageSrc: string | string, container: HTMLElement);
    /** @type {HTMLImageElement | HTMLVideoElement | null} */
    element: HTMLImageElement | HTMLVideoElement | null;
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width: number, height: number): void;
    destroy(): void;
}

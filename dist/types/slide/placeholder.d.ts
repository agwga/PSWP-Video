export default Placeholder;
declare class Placeholder {
    /**
     * @param {string | undefined} contentType
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(contentType: string | undefined, imageSrc: string | false, container: HTMLElement);
    /** @type {HTMLImageElement | HTMLVideoElement | null} */
    element: HTMLImageElement | HTMLVideoElement | null;
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width: number, height: number): void;
    destroy(): void;
}

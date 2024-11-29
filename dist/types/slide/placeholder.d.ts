export default Placeholder;
declare class Placeholder {
    /**
     * @param {string | false} imageSrc
     * @param {string | undefined} contentType
     * @param {HTMLElement} container
     */
    constructor(imageSrc: string | false, contentType: string | undefined, container: HTMLElement);
    /** @type {HTMLImageElement | HTMLVideoElement | null} */
    element: HTMLImageElement | HTMLVideoElement | null;
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width: number, height: number): void;
    destroy(): void;
}

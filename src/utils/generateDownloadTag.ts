/**
 * Generates an anchor element for downloading a file.
 * 
 * @param {string} url - The URL of the file to download.
 * @param {string} fileName - The desired filename for the downloaded file.
 * @returns {HTMLAnchorElement} An anchor element (<a>) configured for downloading the file.
 */
export const generateDownloadTag = (url: string, fileName: string): HTMLAnchorElement => {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    return a;
};

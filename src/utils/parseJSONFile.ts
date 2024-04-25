import { DropzoneFile } from "~/types/Dropzone/DropzoneFile";
import { ErrorMessages } from "~/types/Error/ErrorMessages";

/**
 * Parses a JSON file asynchronously and returns a Promise that resolves with the parsed JSON data.
 * 
 * @param {DropzoneFile | undefined} file - The JSON file to parse.
 * @returns {Promise<string | null>} A Promise that resolves with the parsed JSON data as a string,
 * or null if the file is undefined or null. Rejects with an error message if parsing fails.
 */
export const parseJSONFile = (file: DropzoneFile | undefined) => {
    if (file == null) {
        return null;
    }
    const promise = new Promise((resolve, reject) => {
        try {
            const fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = (e) => {
                const fileJSON = e.target?.result;
                if (typeof fileJSON === 'string') {
                    resolve(JSON.parse(fileJSON));
                } else {
                    reject(ErrorMessages.PARSE_ERROR)
                }
            };
        } catch (error) {
            reject(ErrorMessages.PARSE_ERROR);
        }
    })
    return promise;
}

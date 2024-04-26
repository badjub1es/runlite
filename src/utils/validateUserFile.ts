import { UserFile } from "~/types/UserFile/UserFile";
import { DropzoneFile } from "~/types/Dropzone/DropzoneFile";
import { ErrorMessages } from "~/types/Error/ErrorMessages";
import { parseJSONFile } from "./parseJSONFile";

const hasOwnPropertyCb = (obj: Partial<UserFile>) => {
  return (key: string) => obj.hasOwnProperty(key);
};

/**
 * Determines whether a provided file is valid.
 *
 * @param {DropzoneFile} file - DropZone file
 * @returns {ValidateUserFileReturnType} { isValid, error? }
 */
export const validateUserFile = async (
  file: DropzoneFile | undefined
): Promise<ValidateUserFileReturnType> => {
  if (file == null) {
    return { isValid: false, userFile: null };
  }

  // Parse JSON file to JS object
  let fileJSON: Partial<UserFile>;
  try {
    const parsedFile = await parseJSONFile(file);
    fileJSON = parsedFile as Partial<UserFile>;
  } catch (error) {
    return { isValid: false, error: ErrorMessages.PARSE_ERROR, userFile: null };
  }

  // Validate JS object to ensure data is in an expected format
  const check = hasOwnPropertyCb(fileJSON);
  try {
    // Name validation
    if (check("name")) {
      if (typeof fileJSON.name !== "string") {
        throw new Error();
      }
      if (fileJSON.name.length > 50) {
        throw new Error();
      }
    }
    if (!check("name")) {
      throw new Error();
    }

    // TODO: Continue validations
    // TODO: Return valid user file
    return { isValid: true, userFile: null };
  } catch (error) {
    return {
      isValid: false,
      error: ErrorMessages.FILE_VALIDATION,
      userFile: null,
    };
  }
};

interface ValidateUserFileReturnType {
  userFile: UserFile | null;
  isValid: boolean;
  error?: string;
}

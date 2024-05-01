import { type UserFile } from "~/types/UserFile/UserFile";
import { type DropzoneFile } from "~/types/Dropzone/DropzoneFile";
import { ErrorMessages } from "~/types/Error/ErrorMessages";
import { parseJSONFile } from "./parseJSONFile";
import { MetricType } from "~/types/MetricType/MetricType";

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
        throw new Error(ErrorMessages.NAME_TYPE);
      }
      if (fileJSON.name.length > 50) {
        throw new Error(ErrorMessages.NAME_LENGTH);
      }
    }
    if (!check("name")) {
      throw new Error(ErrorMessages.NAME_MISSING);
    }
    // Metric type validation
    if (check("metricType")) {
      if (
        fileJSON.metricType !== MetricType.MI &&
        fileJSON.metricType !== MetricType.KM
      ) {
        throw new Error(ErrorMessages.METRIC_TYPE_TYPE);
      }
    }
    if (!check("metricType")) {
      throw new Error(ErrorMessages.METRIC_TYPE_MISSING);
    }

    // TODO: Add validations for -> Shoe
    // TODO: Add validations for -> Runs
    // TODO: Return valid user file
    return { isValid: true, userFile: fileJSON as UserFile };
  } catch (error) {
    throw error;
  }
};

interface ValidateUserFileReturnType {
  userFile: UserFile | null;
  isValid: boolean;
  error?: string;
}

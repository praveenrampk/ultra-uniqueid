export interface UniqueIdOptions {
  uppercase?: boolean;
  alphaNumeric?: boolean;
}

/**
 * Generates a unique ID with configurable options.
 * @param length - The length of the generated ID.
 * @param options - Optional settings for uppercase conversion.
 * @returns A unique string ID.
 */
declare function generateUniqueId(
  length?: number,
  options?: UniqueIdOptions
): string;

export = generateUniqueId;

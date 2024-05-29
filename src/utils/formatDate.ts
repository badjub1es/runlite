/**
 * Format the given date into a string representation.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string in the format "Day, Month Date".
 */
export const formatDate = (date: Date): string => {
  const options = { weekday: "long", month: "long", day: "numeric" } as const;
  return date.toLocaleDateString("en-US", options);
};

/**
 * Format the given date into a short string representation.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string in the format "MM/DD/YYYY".
 */
export const formatShortDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

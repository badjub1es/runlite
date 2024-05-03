/**
 * Format the given date into a string representation.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string in the format "Day, Month Date".
 */
export const formatDate = (date: Date): string => {
  const options = { weekday: "long", month: "long", day: "numeric" } as const;
  return date.toLocaleDateString("en-US", options);
};

/**
 * Generates a greeting message based on the current time of the day.
 * @param {Date} date - The Date object representing the current date and time.
 * @returns {string} A greeting message based on the time of day.
 */
export const getGreeting = (date: Date): string => {
  const currentHour = date.getHours();

  switch (true) {
    case currentHour < 12:
      return `Good morning, `;
    case currentHour < 18:
      return `Good afternoon, `;
    case currentHour >= 18:
      return `Good evening, `;
    default:
      return `Greetings, `;
  }
};

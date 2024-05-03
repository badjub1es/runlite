/**
 * Generates a greeting message based on the current time of the day and the provided name.
 * @param {string} name - The name of the person to greet.
 * @param {Date} date - The Date object representing the current date and time.
 * @returns {string} A greeting message based on the time of day and the provided name.
 */
export const getGreeting = (name: string, date: Date): string => {
  const currentHour = date.getHours();

  switch (true) {
    case currentHour < 12:
      return `Good morning, ${name}`;
    case currentHour < 18:
      return `Good afternoon, ${name}`;
    case currentHour >= 18:
      return `Good evening, ${name}`;
    default:
      return `Greetings, ${name}`;
  }
};

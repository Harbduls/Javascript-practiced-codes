// create a variable //
const currentDate = new Date();
console.log(currentDate);
// creat another variable
const currentDateFormat = new Date ();
console.log(currentDateFormat.toISOString());
function formatDateMMDDYYYY(date) {
  // Get month, day, and year
  const month = date.getMonth() + 1; // Months are zero-based in JS
  const day = date.getDate();
  const year = date.getFullYear();

  // Return formatted string
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

// Example usage:
const date = new Date("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)");
console.log(formatDateMMDDYYYY(date));
function formatDateLong(date) {
  // Create an array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Extract month name, day, and year
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Return formatted string
  return `Formatted Date (Month Day, Year): ${monthName} ${day}, ${year}`;
}

// Example usage:
const date = new Date("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)");
console.log(formatDateLong(date));
Formatted Date (Month Day, Year): September 27, 2024
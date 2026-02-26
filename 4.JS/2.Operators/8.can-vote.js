const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your DOB (DD/MM/YYYY): ", (input) => {
  // Check format using regex
  const dobPattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!dobPattern.test(input)) {
    console.log("Invalid format! Please use DD/MM/YYYY.");
    rl.close();
    return;
  }

  const [day, month, year] = input.split("/").map(Number);

  // Create date object
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  // Check if date is valid
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    console.log("Invalid date entered!");
    rl.close();
    return;
  }

  // Calculate age
  let age = today.getFullYear() - year;

  // Adjust age if birthday hasn't happened yet this year
  const hasBirthdayPassed =
    today.getMonth() > month - 1 ||
    (today.getMonth() === month - 1 && today.getDate() >= day);

  if (!hasBirthdayPassed) {
    age--;
  }

  console.log(`Your age is: ${age} years`);

  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote yet.");
  }

  rl.close();
});

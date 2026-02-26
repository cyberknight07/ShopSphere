const readline = require("readline");

const vky = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

vky.question("Enter your age: ", (age) => {
  age = parseInt(age);

  if (isNaN(age)) {
    console.log("Please enter a valid number.");
  } else if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote yet.");
  }

  vky.close();
});

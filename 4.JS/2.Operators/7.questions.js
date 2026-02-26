const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask Name
function askName() {
  rl.question("Enter your name: ", function (name) {
    if (!name.trim()) {
      console.log("❌ Name is mandatory.\n");
      askName();
    } else {
      askAge(name);
    }
  });
}

// Ask Age
function askAge(name) {
  rl.question("Enter your age: ", function (age) {
    if (!age.trim() || isNaN(age) || Number(age) <= 0) {
      console.log("❌ Please enter a valid age.\n");
      askAge(name);
    } else {
      askSalary(name, age);
    }
  });
}

// Ask Salary
function askSalary(name, age) {
  rl.question("Enter your salary: ", function (salary) {
    if (!salary.trim() || isNaN(salary) || Number(salary) <= 0) {
      console.log("❌ Please enter a valid salary.\n");
      askSalary(name, age);
    } else {
      askCity(name, age, salary);
    }
  });
}

// Extra Question
function askCity(name, age, salary) {
  rl.question("Enter your city: ", function (city) {
    if (!city.trim()) {
      console.log("❌ City is mandatory.\n");
      askCity(name, age, salary);
    } else {
      console.log("\n===== USER DETAILS =====");
      console.log("Name   :", name);
      console.log("Age    :", age);
      console.log("Salary :", salary);
      console.log("City   :", city);
      console.log("========================");

      rl.close();
    }
  });
}

// Start the program
askName();

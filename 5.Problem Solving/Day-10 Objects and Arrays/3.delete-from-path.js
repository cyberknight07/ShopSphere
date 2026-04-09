// 🧩 Problem: Delete Value at Given Path

// Write a function deletePath that takes:
// 1. An object
// 2. A string path with keys separated by dots

// The function should:
// - Delete the value at the given path if it exists
// - Return true if deletion was successful
// - Return false if the path does not exist

// Example:

const obj = {
  a: {
    b: {
      c: 12,
      d: 20,
    },
  },
};

const deletePath = (obj, path) => {
  const objCP = structuredClone(obj);
  const keys = path.split(".");
  let traverssed = objCP;

  console.log("keys: ", keys);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; // a, b, c
    const isLastIndex = i === keys.length - 1; // false, false, true

    if (traverssed.hasOwnProperty(key) && isLastIndex) {
      delete traverssed[key];
      break;
    }
    if (traverssed.hasOwnProperty(key)) {
      traverssed = traverssed[key];
    } else {
      return "Not allowed";
    }
  }

  return objCP;
};

// console.log(deletePath(obj, "a.b.c")); // → true
// After deletion, obj becomes:
// { a: { b: { d: 20 } } }

// console.log(deletePath(obj, "a.b")); //→ false
// console.log(deletePath(obj, "a.x.c")); //→ false
console.log(deletePath(obj, "a.b.c.d")); //→ false

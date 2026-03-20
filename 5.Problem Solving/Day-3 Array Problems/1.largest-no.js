const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 2];

let maxNo = input[0]; // 1

/**
 * Step 1 - Iterate the array (Loop chalao array par)
 * Step 2 - Find the largest no through comparision
 */

for (let i = 1; i < input.length; i++) {
  // Get the current value
  const currVal = input[i]; // 1,2,3,4,5
  //console.log("CurrVal: ", currVal, "i:", i);

  if (currVal > maxNo) {
    maxNo = currVal;
  }
}

console.log("MaxNo: ", maxNo);

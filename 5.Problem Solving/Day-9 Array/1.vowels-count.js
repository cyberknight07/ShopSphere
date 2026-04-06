const input = "ankit jain";
const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

const result = {};
for (let i = 0; i < input.length; i++) {
  const currElem = input[i];
  if (currElem === " ") {
    continue;
  }

  console.log({ currElem, result });
  if (vowels.hasOwnProperty(currElem) && result.hasOwnProperty(currElem)) {
    result[currElem] = result[currElem] + 1;
  } else if (vowels.hasOwnProperty(currElem)) {
    result[currElem] = 1;
  }
}
console.log("vowelsCount", result);

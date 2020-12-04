const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
let input = text.split('\n').map(el => { return parseInt(el) });

// Part 1 Brute Force O(n^2)
// for (let i = 0; i < input.length; i++) {
//   let num1 = input[i];
//   for (let j = i + 1; j < input.length; j++) {
//     let num2 = input[j];
//     if (num1 + num2 === 2020) {
//       console.log({num1: num1, num2: num2, output: (num1 * num2)})
//     }
//   }
// }

// Part 1 Optimized O(n)
const findSum = (arr) => {
  let nums = {};
  arr.forEach(num => {
    if (!nums[num]) {
      nums[2020 - num] = num;
    } else {
      console.log({num1: nums[num], num2: num, product: num * nums[num]})
    }
  })
}

// findSum(input);


// Part 2 Brute Force O(n^3)
const findSum2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    let num1 = input[i];
    for (let j = i + 1; j < input.length; j++) {
      let num2 = input[j];
      for (let k = j + 1; k < input.length; k++) {
        let num3 = input[k];
        if (num1 + num2 + num3 === 2020) {
          console.log({num1: num1, num2: num2, num3: num3, output: (num1 * num2 * num3)})
        }
      }
    }
  }
};

// findSum2(input);

// Part2 Optimized O(n^2)

const findSum3 = (input) => {
  const hash = {};
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let sum = input[i] + input[j];
      if (!hash[sum]) {
        hash[sum] = [input[i], input[j]];
      }
    }
  }

  for (let k = 0; k < input.length; k++) {
    let difference = 2020 - input[k];
    if (hash[difference]) {
      console.log({num1: input[k], num2: hash[difference][0], num3: hash[difference][1], output: (input[k] * hash[difference][0] * hash[difference][1])})
      return input[k] * hash[difference][0] * hash[difference][1];
    }
  }

  return null;
}

findSum3(input);
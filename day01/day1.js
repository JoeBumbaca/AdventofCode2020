const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
let input = text.split('\n').map(el => { return parseInt(el) });

// Part 1 Brute Force
// for (let i = 0; i < input.length; i++) {
//   let num1 = input[i];
//   for (let j = i + 1; j < input.length; j++) {
//     let num2 = input[j];
//     if (num1 + num2 === 2020) {
//       console.log({num1: num1, num2: num2, output: (num1 * num2)})
//     }
//   }
// }

// Part 1 Optimized
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


// Part 2 Brute Force
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
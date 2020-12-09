const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8');
const numbers = text.split('\n').map(Number);

const ruleBreaker = (numbers) => {
  let found = false;
  let badNum;
  while(!found) {
    for (let i = 25; i < numbers.length; i++) {
      let preabmble = numbers.slice((i - 25), i);
      let checkNum = numbers[i];
      for (let j = 0; j < preabmble.length; j++) {
        let currNum = preabmble[j];
        if (preabmble.includes(checkNum - currNum)) {
          numbers.shift();
          break;
        } 
        if (j === preabmble.length - 1){
          badNum = checkNum;
          return [badNum, i];
        }
        numbers.shift();
      }
    }
  }
};

// console.log(ruleBreaker(numbers));

const ruleBreaker2 = (numbers) => {
  let total = 104054607;
  let max = 558;
  for (let i = 0; i < max; i++){
    let nums = [];
    let sum = 0;
    for (let j = i; j < max; j++) {
      let currNum = numbers[j];
      sum += currNum;
      nums.push(currNum);
      if (sum > total) {
        break;
      } else if (sum === total) {
        let sorted = nums.sort((a, b) => a - b);
        return sorted[0] + sorted[sorted.length - 1];
      }
    }
  }
};

console.log(ruleBreaker2(numbers));


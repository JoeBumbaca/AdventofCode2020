const fs = require('fs');
const text = fs.readFileSync('test1.txt', 'utf-8');
const input = text.split('\n').map(Number).sort((a,b) => a - b);

// Part1
const adapters = (arr) => {
  let deviceJolts = (arr[arr.length - 1] + 3);
  let oneJoltCount = 0;
  let threeJoltCount = 0;
  arr.unshift(0);
  arr.push(deviceJolts);
  for (let i = 0; i < arr.length - 1; i++) {
    let currAdapter = arr[i];
    let nextAdapter = arr[i + 1];
    let difference = nextAdapter - currAdapter;

    if (difference === 1) {
      oneJoltCount++;
    } else if (difference === 3) {
      threeJoltCount++;
    }
  }
  console.log({oneJoltCount, threeJoltCount})
  return oneJoltCount * threeJoltCount
}

// console.log(adapters(input));

// Part2

const numArrangements = (arr) => {
  let canSkip = 0;
  // let deviceJolts = (arr[arr.length - 1] + 3);
  // arr.unshift(0);
  // arr.push(deviceJolts);
  // console.log(arr);
  let numArrangements = 0;
  for (let i = 0; i < arr.length - 2; i++){
    let currAdapter = arr[i];
    let secondNext = arr[i + 2];
    let difference = secondNext - currAdapter;

    if (difference <= 3) {
      // console.log({currAdapter, secondNext})
      canSkip++;
    }
  }
  // console.log(canSkip)
  for (let j = canSkip; j >= 1; j--) {
    // console.log({numArrangements, j})
    numArrangements += (j * (j - 1));
    // console.log({numArrangements, j})
  }
  return numArrangements;
}

console.log(numArrangements(input));
const fs = require('fs');
const txt = fs.readFileSync('./input.txt', 'utf-8');
const input = txt.split('\n');

// Part 1
const seatFinder = (boardPasses) => {
  let highest = 0;

  boardPasses.forEach(bPass => {
    let min = 0;
    let max = 127;
    let left = 0;
    let right = 7;
    const first = bPass.slice(0,7).split('');
    const second = bPass.slice(7).split('');
    first.forEach(char => {
      if (char === 'F') {
        max = max - Math.ceil((max - min) / 2);
      } else {
        min = min + Math.ceil((max - min) / 2);
      }
    })

    second.forEach(char => {
      if (char === 'L') {
        right = right - Math.ceil((right - left) / 2);
      } else {
        left = left + Math.ceil((right - left) / 2);
      }
    })

    let id = (max * 8) + right;
    if (id > highest) {
      highest = id;
    }
  })
  console.log(highest);
  return highest;
};

// seatFinder(input);

// Part 2
const seatFinder2 = (boardPasses) => {
  let ids = [];
  boardPasses.forEach(bPass => {
    let min = 0;
    let max = 127;
    let left = 0;
    let right = 7;
    const first = bPass.slice(0,7).split('');
    const second = bPass.slice(7).split('');
    first.forEach(char => {
      if (char === 'F') {
        max = max - Math.ceil((max - min) / 2);
      } else {
        min = min + Math.ceil((max - min) / 2);
      }
    })

    second.forEach(char => {
      if (char === 'L') {
        right = right - Math.ceil((right - left) / 2);
      } else {
        left = left + Math.ceil((right - left) / 2);
      }
    })
    ids.push((max * 8) + right);
  })
  let sorted = ids.sort((el1, el2) => el1 - el2);
  let mySeat;
  for (let i = 0; i < sorted.length - 1; i++) {
    let seat = sorted[i];
    let nextSeat = sorted[i + 1];
    if (nextSeat === (seat + 1)) {
      continue;
    } else {
      mySeat = seat + 1;
      console.log({mySeatID: mySeat});
      return mySeat
    }
  }
};

seatFinder2(input);
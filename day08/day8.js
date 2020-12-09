const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8');
const input = text.split('\n');


// Part1

const gBoyHero = (input) => {
  let acc = 0;
  const math = {'+': (x, y) => x + y, '-': (x, y) => x - y};
  const visited = {};

  for (let i = 0; i < input.length;) {
    if (visited[i] === true) {
      break;
    }
    let line = input[i];
    visited[i] = true;
    [instruction, strNumber] = line.split(' ');
    let operand = strNumber.slice(0,1);
    number = Number(strNumber.slice(1));
    switch(instruction) {
      case 'acc':
        acc = math[operand](acc, number);
        i++;
        break;
      case 'jmp':
        i = math[operand](i, number);
        break;
      case 'nop':
        i++;
        break;
    }
  }

  console.log(acc);
  return acc;
};

// gBoyHero(input);

// Part 2

const gBoyHero2 = (input) => {
  const math = {'+': (x, y) => x + y, '-': (x, y) => x - y};
  const attempted = {};
  let fixed = false;
  let acc;
  while(!fixed){
    const visited = {};
    acc = 0;

    for (let i = 0; i < input.length;) {
      if (i === (input.length - 1)) {
        fixed = true;
      }
      if (visited[i] === true) {
        break;
      }

      let line = input[i];
      visited[i] = true;
      [instruction, strNumber] = line.split(' ');
      let operand = strNumber.slice(0,1);
      number = Number(strNumber.slice(1));

      if (!attempted[i]) {
        attempted[i] = true;
        switch(instruction) {
          case 'jmp':
            instruction = 'nop';
            break;
          case 'nop':
            instruction = 'jmp';
            break;
          default:
            break;
        }
      } 
     
      switch(instruction) {
        case 'acc':
          acc = math[operand](acc, number);
          i++;
          break;
        case 'jmp':
          i = math[operand](i, number);
          break;
        case 'nop':
          i++;
          break;
      }
    }
  }

  console.log(acc);
  return acc;
};

// gBoyHero2(input);
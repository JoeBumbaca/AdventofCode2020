const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8');
const groups = text.split('\n\n');


// Part1
const yesFinder = (groups) => {
  const yes = [];

  groups.forEach(group => {
    const responses = group.split('\n');
    let questions = new Set();
    responses.forEach(response => {
      chars = response.split('');
      chars.forEach(char => {
        questions.add(char);
      })
    })
    yes.push(questions.size)
  })

  return yes.reduce((acc, el) => {
    return acc += el;
  });
};

// console.log(yesFinder(groups));


// Part2
const yesFinder2 = (groups) => {
  const yes = [];

  groups.forEach(group => {
    const responses = group.split('\n');
    let questions = {};
    responses.forEach(response => {
      chars = response.split('');
      chars.forEach(char => {
        if (questions[char]) {
          questions[char] += 1;
        } else {
          questions[char] = 1;
        }
      })
    })
    let count = 0;
    Object.keys(questions).forEach(question => {
      if (questions[question] === responses.length) {
        count += 1;
      }
    })
    yes.push(count);
  })

  return yes.reduce((acc, el) => {
    return acc += el;
  });
};

console.log(yesFinder2(groups));


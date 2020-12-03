const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
let input = text.split('\n');

// Part1
const slopeReader = (hill) => {
  let pos = [0,0];
  let treeCount = 0;

  while (pos[0] < hill.length) {
    if (hill[pos[0]][pos[1] % hill[pos[0]].length] === '#') {
      treeCount += 1;
    }
    pos[0] += 1;
    pos[1] += 3;
  }
  console.log({ treeCount: treeCount })
  return treeCount
};

// slopeReader(input);

// Part2
const slopeReader2 = (hill) => {
  let paths = [[1,1], [3,1], [5,1], [7,1], [1,2]]
  let treeCounts = [];
  let result = 1;
  
  paths.forEach(path => {
    let treeCount = 0;
    let pos = [0,0];
    while (pos[0] < hill.length) {
      if (hill[pos[0]][pos[1] % hill[pos[0]].length] === '#') {
        treeCount += 1;
      }
      pos[0] += path[1];
      pos[1] += path[0];
    }
    treeCounts.push(treeCount)
    result *= treeCounts[treeCounts.length - 1];
    // console.log({path: path, treeCount: treeCount, treeCounts: treeCounts});
  })

  // let result = treeCounts.reduce((acc, count) => {
  //   return acc *= count;
  // });
  console.log({result: result});
  return result
};

slopeReader2(input);
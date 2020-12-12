const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8');
const input = text.split('\n');


const seatSim = (area) => {
  const rows = area.map(row => row.split(''));


};

const seatSwitcher = (rows) => {
  const switches = [];
  const dirs = [[-1,0], [1,0], [0,1], [0,-1], [-1,1], [1,1], [1,-1], [-1,-1]];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    for (let j = 0; j < row.length; j++) {
      let seat = rows[i][j];
      dirs.forEach(dir => {
        let checkSeat = rows[i + dir[0]][rows[j + dir[1]]];
        if (seat === 'L' && checkSeat !== '#'){
          continue;
        } else {
          break;
        }
        switches.push([i, j]);
      })
    }
  }

  switches.forEach(switchPos => {
    rows[switchPos[0]][switchPos[1]] = '#'
  })

}

seatSim(input);
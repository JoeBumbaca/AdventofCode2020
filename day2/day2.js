const fs = require("fs");
const text = fs.readFileSync("./day2Input.txt", "utf-8");
let input = text.split("\n")


// Part1
const validatePasswords = (data) => {
  let validPasswords = 0;
  data.forEach((datum) => {
    const segments = datum.split(' ');
    const range = segments[0].split('-');
    const char = segments[1][0];
    const password = segments[2];
    // console.log({range: range, char: char, password: password});
    let charCount = 0;
    password.split('').forEach((letter) => {
      if (letter === char) {
        charCount += 1;
      }
    })
    if (charCount >= range[0] && charCount <= range[1]){
      validPasswords += 1;
    }
  })
  console.log({numValid: validPasswords});
  return validPasswords;
};

// validatePasswords(input);

// Part2
const validatePasswords2 = (data) => {
  let validPasswords = 0;
  data.forEach((datum) => {
    const segments = datum.split(' ');
    const range = segments[0].split('-');
    const char = segments[1][0];
    const password = segments[2];
    let check = 0
    if (password[range[0] - 1] === char) {
      check += 1;
      // console.log({char: char, letter: password[range[0]], check: check})
    }
    if (password[range[1] - 1] === char) {
      check += 1;
      // console.log({char: char, letter: password[range[1]], check: check})
    }
    if (check === 1) {
      validPasswords += 1;
    }
  })
  console.log({numValid: validPasswords});
  return validPasswords;
};

// validatePasswords2(input);
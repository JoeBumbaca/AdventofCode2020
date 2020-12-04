const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
const input = text.split('\n\n');
const indv = input.map(datum => {
  return datum.split('\n')
});
const indv2 = indv.map(datum => {
  if (datum.length > 1) {
    return [datum.join(' ')];
  } else {
    return datum;
  }
});

// Part 1
const passportValidator = (passports) => {
  let validPassports = 0;
  let validItems = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  passports.forEach(passport => {
    let parts = passport[0].split(' ');
    let keyCount = 0;
    parts.forEach(part => {
      let keys = part.split(':');
      if (validItems.includes(keys[0])){
        keyCount += 1;
      }
    })
    
    if (keyCount >= 7) {
      validPassports += 1;
    }
  });

  console.log({validNum: validPassports});
  return validPassports
};

// passportValidator(indv2);


// Part2
const passportValidator2 = (passports) => {
  let validPassports = 0;
  let validItems = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

  passports.forEach(passport => {
    let parts = passport[0].split(' ');
    let keyCount = 0;
    parts.forEach(part => {
      let keys = part.split(':');
      if (validItems.includes(keys[0])){
        switch(keys[0]){
          case 'byr':
            if (parseInt(keys[1]) >= 1920 && parseInt(keys[1]) <= 2002){
              keyCount += 1;
            }
            break;
          case 'iyr':
            if (parseInt(keys[1]) >= 2010 && parseInt(keys[1]) <= 2020){
                keyCount += 1;
            }
            break;
          case 'eyr':
            
            if (parseInt(keys[1]) >= 2020 && parseInt(keys[1]) <= 2030){
              keyCount += 1;
            }
            break;
          case 'hgt':
            let suffix = keys[1].slice(keys[1].length - 2);
            if ( suffix === 'in' || suffix === 'cm') {
              let num = parseInt(keys[1].slice(0, keys[1].length - 2));
              if (suffix === 'in') {
                if (num >= 59 && num <= 76) {
                  keyCount += 1;
                } 
              } else {
                if (num >= 150 && num <= 193) {
                  keyCount += 1;
                }
              }
            }
            break;
          case 'hcl':
            let check = keys[1].split('');
            if (check[0] === '#') {
              let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
              let chars = ['a', 'b', 'c', 'd', 'e', 'f'];
              for (let i = 1; i < check.length; i++) {
                let char = check[i];
                if (nums.includes(char) || chars.includes(char)) {
                  continue;
                } else {
                  break;
                }
              }
              keyCount += 1;
            }
            break;
          case 'ecl':
            const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
            if (colors.includes(keys[1])) {
              keyCount += 1;
            }
            break;
          case 'pid':
            
            if (keys[1].length === 9) {
              keyCount += 1;
            }
            break;
          default:
            break;
        }
      }
    })
    if (keyCount >= 7) {
      validPassports += 1;
    }
  });

  console.log({validNum: validPassports});
  return validPassports
};

const invalid = [
  ['eyr:1972 cid:100 hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926']
];

passportValidator2(indv2);

const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8');
const rules = text.split('\n');


const bagCounter = (rules) => {
  const myBag = 'shiny gold bag'
  let numBags = 0;
  const bags = {};
  let directBags = [];
  rules.forEach(rule => {
    [outerBag, innerBags] = rule.split(' contain ');
    bagSplit = innerBags.split(', ');
    bagSplit.forEach(split => {
      if (split.includes(myBag) && !bags[outerBag]) {
        numBags += 1;
        directBags.push(outerBag);
        bags[outerBag] = true;
      }
    })
  });

  while(directBags.length) {
    let surrogate = directBags.slice(0);
    surrogate.forEach(bag => {
      rules.forEach(rule => {
        [outerBag, innerBags] = rule.split(' contain ');
        bagSplit = innerBags.split(', ');
        bagSplit.forEach(split => {
          if (split.includes(bag.slice(0, (bag.length - 1)))) {
            if (!bags[outerBag]) {
              numBags += 1;
              bags[outerBag] = true;
              directBags.push(outerBag);
            }
          }
          
        })
      })
      directBags.shift();
    });
  };

  console.log(numBags);
  return numBags;
};

// bagCounter(rules);

const goldBagCounter = (rules) => {
  const bags = {};
  const direct = [];
  let bagCount = 1;
  rules.forEach(rule => {
    [outerBag, innerBags] = rule.split(' contain ');
    bagSplit = innerBags.split(', ');
    bags[outerBag] = bagSplit;
  })

  bags['shiny gold bags'].forEach(inner => {
    let number;
    let bag = inner.slice(2);
    direct.push(bag);
  })
  
  while(direct.length) {
    let surrogate = direct.slice(0);

    surrogate.forEach(bag => {
       let inner = bags[bag];
       if (inner === undefined) {
        inner = bags['dark turquoise bags']
       }
       inner.forEach(innerBag => {
         innerBag = innerBag.slice(2);
         direct.push(innerBag);
         bagCount += 1;
         direct.shift();
       })
    })
  }

  console.log(bagCount);
  return bagCount;
};

goldBagCounter(rules);
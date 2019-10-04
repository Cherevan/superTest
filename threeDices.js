/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

const aim = 8;
const diceResult = [];
let diceSum = {};
let throwQuantity = 1;   //just for fun:

while (diceSum !== aim) {
  diceSum = 0;
  for (let i = 0; i < 3; i++) {
    diceResult[i] = getRandomNumber();
    diceSum += diceResult[i];
  }
  console.log('Throw #', throwQuantity++, '-', diceResult, '- Sum =', diceSum);
}

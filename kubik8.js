// /* eslint-disable no-console */
// /* eslint linebreak-style: ["error", "windows"] */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}
function simulateMatch() {
  return {
    dice1: getRandomNumber(6),
    dice2: getRandomNumber(6),
    dice3: getRandomNumber(6),
  };
}
let play;
let summa;
let x = 0; // number of throws
while (summa !== 8) {
  summa = 0;
  x++; //x = x + 1 , x += 1
  play = simulateMatch();
  summa = play.dice1 + play.dice2 + play.dice3;
  console.log(play.dice1, play.dice2, play.dice3);
    console.log('Сумма =', summa, ', Бросок #', x);
}
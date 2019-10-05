/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}
function simulate() {
  return {
    kubik1: getRandomNumber(6),
    kubik2: getRandomNumber(6),
    kubik3: getRandomNumber(6),
  };
}

let play = simulate();
let summa;
let kol = 0;
while (summa !== 8){
  summa = 0;
  kol++;
  play = simulate();
  summa = play.kubik1 + play.kubik2 + play.kubik3;
  console.log('Количество бросков =', kol, 'Сума после бросков =', summa);
}
console.log ('Задача решена вместе в андрюхой и сектором))))')
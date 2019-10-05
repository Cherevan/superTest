/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

let summa;
let broskiKubov = [];
let cvo = 0;

while (summa !== 8){
  summa = 0;
  cvo++;
  for (let i = 0; i < 3; i++){
    broskiKubov[i] = getRandomNumber();
    summa += broskiKubov[i];
  
  }
  console.log(summa);
}
console.log(cvo);

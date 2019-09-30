/* eslint linebreak-style: ["error", "windows"] */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * 6) + 1;
}

const cubes = ['cube1', 'cube2', 'cube3'];
const cubesThrown = [];
let cubesSum = {};

while (cubesSum !== 8) {
  cubesSum = 0;
  for (let i = 0; i < cubes.length; i += 1) {
    cubesThrown[i] = getRandomNumber();
    cubesSum += cubesThrown[i];
  }
}


console.log(cubesThrown);
console.log(cubesSum);
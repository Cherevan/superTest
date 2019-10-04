/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function bobVisitPub(bob) {
  return bob + getRandomNumber(6);
}

function simulateMatch() {
  return {
    home: getRandomNumber(5),
    away: getRandomNumber(5),
  };
}

const mrBob = 0;
const cyroz = 350;
const clubs = [
  'Arsenal',
  'Man United',
  'Man City',
  'Everton',
  'Liverpool',
  'West Ham',
  'Lester',
  'Chelsea',
];

console.log('Clubs in League:', clubs.length);

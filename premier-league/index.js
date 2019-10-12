/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const { playGame } = require('./helper');

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function simulateMatch() {
  return {
    home: getRandomNumber(5),
    away: getRandomNumber(5),
  };
}


const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8');
const clubs = premier.split(',');
console.log(clubs);
const table = {};

clubs.forEach(club => {
  table[club] = 0;
});

clubs.forEach(clubA => {
  clubs.forEach(clubB => {
    if (clubA !== clubB) {
      const play1 = playGame();
      const play2 = playGame();

      table[clubA] += play1[0] + play2[1];
      table[clubB] += play1[1] + play2[0];
    }
  });
});

// //const lil = clubs.filter(x => {
//   return x.startsWith('M') || x.endsWith('enal');    функция 
// });
console.log(table);
// записываь файлы через врайт фс
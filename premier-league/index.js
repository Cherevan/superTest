/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const fs = require('fs'); // fs - библиотека работающая с файловой системой;
const path = require('path');

const { playGame, failedTeam } = require('./helper');

// function someFunction(one, two, three = `SHIT!`) {
//   if (two === 666){
//     return console.log('KOORWA!!!');
//   }
//   return console.log(`Value1 ${one}, Value2 ${two}, Value3 ${three}`);
// }

// someFunction('Shit', 6666, true);

const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8');
const clubs = premier.split(', ');

// console.log(premierClubs);

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

console.log(table);

console.log('Failed team is:', failedTeam(table));

// console.log(clubs.filter(x => x.startsWith('W')));

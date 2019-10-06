/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const{playGame, failedTeam} = require('./helper');

const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8');
const clubs = premier.split(',');


const table = {};

clubs.forEach(club => {
  table[club] = 0;
});

clubs.forEach (club1 => {
  clubs.forEach(club2 => {
    if (club1 !== club2){
      const play1 = playGame();
      const play2 = playGame();

    table[club1] += play1[0] + play2[1];
    table[club2] += play1[1] + play2[0];
    }
  })
})
console.log(table);
console.log('Failed team:', failedTeam(table));

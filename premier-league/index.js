/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const fs = require('fs'); // fs - библиотека работающая с файловой системой;
const path = require('path');

const { sum, winTeam, playGame, failedTeam } = require('./helper');

const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8');
const clubsPremier = premier.split(',');
const championship = fs.readFileSync(path.resolve(__dirname, './championship.txt'), 'utf8');
const clubsChampionship = championship.split(',');
const tablePremier = {};
const tableChampionship = {};

// clubsPremier.()

clubsPremier.forEach(club => {
  tablePremier[club] = 0;
});

clubsChampionship.forEach(club => {
  tableChampionship[club] = 0;
});

clubsPremier.forEach(clubA => {
  clubsPremier.forEach(clubB => {
    if (clubA !== clubB) {
      const play1 = playGame();
      const play2 = playGame();

      tablePremier[clubA] += play1[0] + play2[1];
      tablePremier[clubB] += play1[1] + play2[0];
    }
  });
});

// clubsChampionship.forEach(club => {
//   tableChampionship[club] = getRandomInt(1488);
// });

clubsChampionship.forEach(clubA => {
  clubsChampionship.forEach(clubB => {
    if (clubA !== clubB) {
      const play1 = playGame();
      const play2 = playGame();

      tableChampionship[clubA] += play1[0] + play2[1];
      tableChampionship[clubB] += play1[1] + play2[0];
    }
  });
});

console.log(tablePremier);
const looserPremier = failedTeam(tablePremier);
console.log(
  'Looser team in Premier League is:',
  looserPremier,
  'Next season it will play in Championship League! Such a shame!!!\n',
);

console.log(`sum ${sum(2, 999)}`);

console.log(tableChampionship);
const winnerChampionship = winTeam(tableChampionship);
console.log(
  'Winner team in Championship is:',
  winnerChampionship,
  'Next season it will play in Premiere League! Congratulations!!!',
);

clubsPremier.filter(club => club !== looserPremier);
clubsPremier.push(winnerChampionship);
clubsPremier.sort();

clubsChampionship.filter(club => club !== winnerChampionship);
clubsChampionship.push(looserPremier);
clubsChampionship.sort();

fs.writeFileSync(path.resolve(__dirname, './premier.txt'), clubsPremier);
fs.writeFileSync(path.resolve(__dirname, './championship.txt'), clubsChampionship);

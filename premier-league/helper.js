/* eslint-disable linebreak-style */

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function simulateMatch() {
  return {
    home: getRandomNumber(5),
    away: getRandomNumber(5),
  };
}

function playGame() {
  const play = simulateMatch();
  if (play.home > play.away) {
    return [3, 0];
  }
  if (play.home < play.away) {
    return [0, 3];
  }
  return [0, 0];
}

function failedTeam(table) {
  let point = Infinity;
  let looser;
  Object.keys(table).forEach(club => {
    if (table[club] < point) {
      point = table[club];
      looser = club;
    }
  });
  
  return looser;
}

module.exports = { getRandomNumber, simulateMatch, playGame, failedTeam };

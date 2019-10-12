/* eslint-disable linebreak-style */

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function simulateMatch() {
  return {
    home: getRandomInt(5),
    away: getRandomInt(5),
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

function winTeam(table) {
  let point = -1;
  let winner;
  Object.keys(table).forEach(club => {
    if (table[club] > point) {
      point = table[club];
      winner = club;
    }
  });

  return winner;
}

function sum(a, b) {
  return a + b;
}

module.exports = { sum, getRandomInt, simulateMatch, playGame, failedTeam, winTeam };

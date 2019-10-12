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
  return [1, 1];
}
module.exports = { playGame };

function failedTeam(table) {
  let point = 0;
  Object.keys(table).forEach(team => {
if (table[team] < 
  });
}
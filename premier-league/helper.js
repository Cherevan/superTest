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
function playGame() { //функция стимулятора матча
  const play = simulateMatch();
  if (play.home > play.away) {
    return [3, 0]; //3 очка получает домашнняя команда, гостевая - 0 очков
  }
  if (play.home < play.away) {
    return [0, 3]; //3 очка получает гостевая команда, домашняя - 0 очков
  }

  return [1, 1]; // если не выгривает ни домашняя, ни выездная команда то каждому по 1 очку
}

function failTeam(table) {
  let point = 99999999;
  let loserclub; //название клуба

  Object.keys(table).forEach(club => {
    // достаем ключи название команды с таблици
    if (table[club] < point) {
      point = table[club];
      loserclub = club;
    }
  });

  return loserclub; //вернуть название зминної лузер тим
}

module.exports = { playGame, failTeam };

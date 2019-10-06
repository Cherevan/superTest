/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const { playGame, failTeam } = require('./helper'); // получаем все функции с файла

const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8'); //берем данные с файла
const clubs = premier.split(','); // split - делает из массива разделение на рядок
const table = {};

clubs.forEach(club => {
  // forEach - метод с функцией у класса - перебирает елементы массива
  table[club] = 0; //створюэм тейбл таблиці
});

clubs.forEach(clubA => {
  clubs.forEach(clubB => {
    if (clubA !== clubB) {
      const play1 = playGame(); // две константы с результатами игр - стимулируем матч и вызанчаем каким командаам даем очки
      const play2 = playGame();
      table[clubA] += play1[0] + play2[1]; //таблица с ключами  названий команд table - добавить результаті игры
      table[clubB] += play1[1] + play2[0];
    }
  });
});

console.log(table);
console.log('failTeam team:', failTeam(table));

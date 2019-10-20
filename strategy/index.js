/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// strategy
const Army = require('./army');
const Castle = require('./castle');
const { getRandomInt, simulateBattle } = require('./helper');

const countries = ['Ukraine', 'Poland', 'Moskovia', 'Crimea'];
const castleNames = [
  'Hotyn',
  'Sich',
  'Krakov',
  'Warsaw',
  'Moscow',
  'Novhorod',
  'Perekop',
  'Hersoness',
];

// const poland = new Army(`Poland`, 140, 32, 65);
// console.log(`Poland army:`, poland.getTroops());
const players = {};
const castles = {};

countries.forEach((c, idx) => {
  players[c] = new Army(c);

  castles[castleNames[idx * 2]] = new Castle(castleNames[idx * 2], c);
  players[c].addCastle(castleNames[idx * 2]);

  castles[castleNames[idx * 2 + 1]] = new Castle(castleNames[idx * 2 + 1], c);
  players[c].addCastle(castleNames[idx * 2 + 1]);
});

let attemp = 0;
while (attemp <= 5) {
  Object.keys(players).forEach(player => {
    if (players[player] && players[player].getWarList()) {
      const enemy = players[player].getWarList()[0];
      
      if (player !== enemy && players[player] && players[enemy]) {
        const battle = simulateBattle(players[player].getPower(), players[enemy].getPower());

        if (battle > 0) {
          players[enemy].damage(battle);
          players[player].damage(Math.round(battle * 0.5));
        } else {
          players[player].damage(-1 * battle);
          players[enemy].damage(Math.round(battle * -0.5));
        }

        if (!players[player].getPower()) {
          countries.splice(player, 1);
          players[enemy].removeEnemy(player);
          delete players[player];
        }

        if (!players[enemy].getPower()) {
          countries.splice(enemy, 1);
          players[player].removeEnemy(enemy);
          delete players[enemy];
        }
      }
    } else {
      const enemy = countries[getRandomInt(countries.length - 1)];
      if (players[player] && players[enemy] && player !== enemy) {
        players[player].addEnemy(enemy);
        players[enemy].addEnemy(player);
      }
    }
  });

  attemp++;
}
// console.log(`Counties`, players);
// console.log(`Castles:`, castles);

// players.Moscovia.removeCastle('Moscow');
// console.log(Moscovia);

console.log(`Countries:`, players);

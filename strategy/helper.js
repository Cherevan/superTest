/* eslint-disable linebreak-style */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function simulateBattle(attacker, defender) {
  const attackPower = attacker + getRandomInt(88);
  const defendPower = defender + getRandomInt(88) * 1.25;

  return attackPower - defendPower;
}

module.exports = { getRandomInt, simulateBattle };

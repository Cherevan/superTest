const fs = require('fs');
const path = require('path');

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
    } else if (play.home < play.away) {
    return [0, 3];
    } 
    return [1, 1];
}

function failedTeam(table) {
    let point = 99999999999;
    let loserTeam;
    
    Object.keys(table).forEach(club => {
        if (table[club] < point){
            point = table[club];
            loserTeam = club;
        }
    })

    return loserTeam;
}
     
    

      module.exports = { playGame, failedTeam };
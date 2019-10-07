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

function topTeam(table1) {
    let point = 0;
    let winnerTeam;
    
    Object.keys(table1).forEach(club => {
        if (table1[club] > point){
            point = table1[club];
            winnerTeam = club;
        }
    })

    return winnerTeam;
}

    

      module.exports = { playGame, topTeam };
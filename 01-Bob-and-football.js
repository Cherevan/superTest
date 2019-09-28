/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function bobVisitPub(bob) {
  return bob + getRandomNumber(6);
}

function simulateMatch() {
  return {
    home: getRandomNumber(5),
    away: getRandomNumber(5),
  };
}

let mrBob = 0;
let season = 0;
const cyroz = 350;
const clubs = [
  'Arsenal',
  'Man United',
  'Man City',
  'Everton',
  'Liverpool',
  'West Ham',
  'Lester',
  'Chelsea',
];
const table = {};
for (let i = 0; i < clubs.length; i += 1) {
  table[clubs[i]] = 0;
}
while (mrBob <= cyroz) {
  for (let i = 0; i < clubs.length; i += 1) {
    for (let j = 0; j < clubs.length; j += 1) {
      if (i !== j) {
        const play1 = simulateMatch();
        if (play1.home > play1.away) {
          table[clubs[i]] += 3;
        } else if (play1.home < play1.away) {
          table[clubs[j]] += 3;
        } else {
          table[clubs[j]] += 1;
          table[clubs[i]] += 1;
        }

        const play2 = simulateMatch();
        if (play2.home > play2.away) {
          table[clubs[i]] += 3;
        } else if (play2.home < play2.away) {
          table[clubs[j]] += 3;
        } else {
          table[clubs[j]] += 1;
          table[clubs[i]] += 1;
        }
        // Боб идет бухать:
        if (play1.home + play1.away > 6) {
          mrBob = bobVisitPub(mrBob);
        }

        if (play2.home + play2.away > 6) {
          mrBob = bobVisitPub(mrBob);
        }

        if (mrBob >= cyroz) {
          break;
        }
      }
    }
    if (mrBob >= cyroz) {
      break;
    }
  }
  season += 1;
}

console.log(table);
console.log('Mr Bob vupil piva:', mrBob, 'litra');
console.log('Mr Bob vuderzal', season, 'sezona');

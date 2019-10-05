/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
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
let season = 1;
const cyroz = 500;
const clubs = [
  'Arsenal FC',
  'Aston Villa FC',
  'Bournemouth FC',
  'Brighton & Hove Albion FC',
  'Burnley FC',
  'Chelsea FC',
  'Crystal Palace FC',
  'Everton FC',
  'Leicester City FC',
  'Liverpool FC',
  'Manchester City FC',
  'Manchester United FC',
  'Newcastle United FC',
  'Norwich City FC',
  'Sheffield United FC',
  'Southhampton FC',
  'Tottenham Hotspur FC',
  'Watford FC',
  'West Ham United FC',
  'Wolverhampton Wanderers FC',
];
const table = {};
for (let i = 0; i < clubs.length; i++) {
  table[clubs[i]] = 0;
}
while (mrBob <= cyroz) {
  for (let i = 0; i < clubs.length; i++) {
    for (let j = 0; j < clubs.length; j++) {
      if (i !== j) {
        // Первый тур:
        const play1 = simulateMatch();
        if (play1.home > play1.away) {
          table[clubs[i]] += 3;
        } else if (play1.home < play1.away) {
          table[clubs[j]] += 3;
        } else {
          table[clubs[j]] += 1;
          table[clubs[i]] += 1;
        }
        // Второй тур:
        const play2 = simulateMatch();
        if (play2.home > play2.away) {
          table[clubs[i]] += 3;
        } else if (play2.home < play2.away) {
          table[clubs[j]] += 3;
        } else {
          table[clubs[j]] += 1;
          table[clubs[i]] += 1;
        }
        // Боб идет бухать, если в матче забили больше 6 голов:
        if (play1.home + play1.away > 6) {
          mrBob = bobVisitPub(mrBob);
        }

        if (play2.home + play2.away > 6) {
          mrBob = bobVisitPub(mrBob);
        }
      }
    }
  }
  console.log('Сезон', season);
  console.log('Турнирная таблица\n', table);
  for (let i = 0; i < clubs.length; i++) {
    table[clubs[i]] = 0;
  }
  season++;
  // Боб умирает при цирозе:
  if (mrBob >= cyroz) {
    console.log('Мистер Боб скончался :(');
    break;
  }
}

console.log('Мистер Боб выпил пива', mrBob, 'литра.');
console.log('Мистер Боб выдержал', season, 'сезон(а).');

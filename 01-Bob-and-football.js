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
let season = 0;

for (let i = 0; i < clubs.length; i++) {
    table[clubs[i]] = 0;
};

while (mrBob < cyroz) {
  season +=1; 
  for (let i = 0; i < clubs.length; i++) {
    if(mrBob >= cyroz){
      break;
     }
    for (let j = 0; j < clubs.length; j++) {
      if(clubs[i] !== clubs[j]){
        const play1 = simulateMatch();
        if (play1.away + play1.home > 6) {
          mrBob = bobVisitPub(mrBob);
          if(mrBob >= cyroz){
           break;
          }
        }
        if (play1.home > play1.away) {
          table[clubs[i]] += 3;
        } else if (play1.home === play1.away) {
          table[clubs[i]] += 1;
          table[clubs[j]] += 1;
        } else {
          table[clubs[j]] += 3;
        }

        const play2 = simulateMatch();
        if (play2.away + play2.home > 6) {
          mrBob = bobVisitPub(mrBob);
          if(mrBob >= cyroz){
            break;
           }
        }
        if (play2.home > play2.away) {
          table[clubs[i]] += 3;
        } else if (play2.home === play2.away) {
          table[clubs[i]] += 1;
          table[clubs[j]] += 1;
        } else {
          table[clubs[j]] += 3;
        }
      }
    }
  }
}

console.log(table);
console.log(`Bob drank ${mrBob}l`);
console.log(season);
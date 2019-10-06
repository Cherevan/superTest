git git /* eslint-disable no-console */

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function simulateMatch() {
  return {
    home: getRandomNumber(5),
    away: getRandomNumber(5),
  };
}

// const premier = fs.readFileSync(path.resolve(__dirname, './premier.txt'), 'utf8');

const table = {};

for (let i = 0; i < clubs.length; i += 1) {
  table[clubs[i]] = 0;
}

for (let i = 0; i < clubs.length; i += 1) {
  for (let j = 0; j < clubs.length; j += 1) {
    if (i !== j) {
      const play1 = simulateMatch();
      if (play1.home > play1.away) {
        table[clubs[i]] += 3;
      } else if (play1.home === play1.away) {
        table[clubs[i]] += 1;
        table[clubs[j]] += 1;
      } else {
        table[clubs[j]] += 3;
      }

      const play2 = simulateMatch();
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

console.log(table);

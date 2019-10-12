/* eslint-disable linebreak-style */
const fs = require('fs');
const path = require('path');

function getClubs(req, res) {
  const clubs = fs.readFileSync(path.resolve(__dirname, '../premier-league/premier.txt'), 'utf8');

  let result = '';
  clubs.split(',').forEach(club => {
    result += `${club}\n`;
  });

  res.send(result);
}

function addClubs(req, res) {
  let clubs = fs.readFileSync(path.resolve(__dirname, '../premier-league/premier.txt'), 'utf8');

  const newClub = req.query.new_club;

  clubs += `${newClub}`;
  fs.writeFile(path.resolve(__dirname, '../premier-league/premier.txt'), clubs, err => {
  console.log('EROR:', err);
  });

  res.send('ADD NEW CLUB:', clubs);
}

module.exports = { getClubs, addClubs };
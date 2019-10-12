/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');

// const bodyParser = require('body-parser');

const { getClubs, addClubs } = require('./helper');

const port = process.env.PORT;



console.log('PORT:', port);

const app = express();

app.listen(port, () => {
  return console.log('HI BITCH!', port);
});

app.get('/clubs', getClubs);

app.get('/', (req, res) => {
  res.send('HI BITCH');
});

app.get('/id/:user_id/user', (req, res) => {
  res.send(`USER: ${req.params.user_id}`);
});

app
  .route('/clubs')
  .get(getClubs)
  .post(addClubs);
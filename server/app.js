const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // for parsing application/json

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fonebook',
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
  res.status(200).send('A-Okay');
});
app.get('/workgroups', (req, res) => {
  connection.connect();

  let workgroups = [];
  connection.query('SELECT * from workgroups', (err, rows) => {
    if (err) throw err;

    workgroups = rows;
    res.status(200).send(workgroups);
  });

  connection.end();
});

app.post('/workgroups', (req, res) => {
  connection.connect();

  connection.query('insert into workgroups (name,created_at,updated_at) values (?,now(),now())', [req.body.name], (err) => {
    if (err) throw err;

    res.status(200).send();
  });

  connection.end();
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

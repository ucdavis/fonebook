const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // for parsing application/json

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fonebook'
});
	
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/status', function (req, res) {
	res.status(200).send('A-Okay');
});
app.get('/workgroups', function (req,res) {

	connection.connect()
	var workgroups = [];
	connection.query('SELECT * from workgroups', function (err, rows, fields) {
	  if (err) throw err
	
	  workgroups = rows;
	  res.status(200).send(workgroups);
	})
	
	connection.end()

});


app.post('/workgroups', function (req,res) {

	connection.connect()
	
	connection.query('insert into workgroups (name,created_at,updated_at) values (?,now(),now())',[req.body.name], function (err, rows, fields) {
	  if (err) throw err
	
	  res.status(200).send();
	})
	
	connection.end()

});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});



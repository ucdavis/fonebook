const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/status', function (req, res) {
	res.status(200).send('A-Okay');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

console.log("Program Done");
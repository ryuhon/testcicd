'use strict';
const express = require('express');
const os = require('os');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();


var hostname = os.hostname();

app.get('/',(req,res) =>{
	res.send('Hello world222333332\nHostNAME : '+hostname);
});

app.listen(PORT,HOST);
console.log('Running on http://${HOST}:${PORT}');

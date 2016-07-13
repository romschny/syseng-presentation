'use strict';

var express = require('express');
var app = express();

app.use('/', express.static('presentation'));

app.listen(3000, function () {
  console.log('localhost:3000/');
});
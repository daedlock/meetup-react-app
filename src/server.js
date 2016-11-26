/* eslint-disable */
var  express = require('express');
var  compression = require('compression');

var app = express();

// const env = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 3000;
app.use(compression());
app.use(express.static(`${__dirname}/../build`));
app.listen(port);
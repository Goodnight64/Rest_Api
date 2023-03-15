const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParse = require('body-parser');

const rotaPaises = require('./routes/country');

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json()); //json
app.use(morgan('dev'));
app.use('/country', rotaPaises);

module.exports = app;
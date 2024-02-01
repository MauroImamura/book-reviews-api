'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const config = require('./config');

const app = express();
const router = express.Router();

//db connection
mongoose.connect(config.connectionString);

//models load
const Book = require('./models/book');
const User = require('./models/user');
const Review = require('./models/review');

//routes load
const indexRoute = require('./routes/index');
const bookRoute = require('./routes/book');
const userRoute = require('./routes/user');
const reviewRoute = require('./routes/review');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/books', bookRoute);
app.use('/user', userRoute);
app.use('/review', reviewRoute);

module.exports = app;
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/books', bookRoute);
app.use('/user', userRoute);
app.use('/review', reviewRoute);

module.exports = app;
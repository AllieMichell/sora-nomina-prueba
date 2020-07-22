var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// Routes
const employeeRouter = require('./routes/employeeR');

var app = express();
// Mongoose connection
mongoose.connect(
    `${process.env.DB_HOST}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err){
            console.error(err);
        }
        console.log('Successfully connected');
    }
);
// View engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Routes 
let url = '/v0.0.1/sora-nomina'
app.use(`${url}/employee`, employeeRouter);


module.exports = app;

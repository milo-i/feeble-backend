var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var loginRouter = require('./routes/login');
var sessionRouter= require('./routes/session')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/session', sessionRouter);
app.use('/login', loginRouter);
app.use('/session', sessionRouter)


// Connection to mongodb
const dbURI = 'mongodb+srv://dbUser:feeble-backend@feeble-backend.vutul.mongodb.net/feeble-backend?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => console.log('uppkopplad mot databasen'))
 .catch((err) => console.log(err));




module.exports = app;

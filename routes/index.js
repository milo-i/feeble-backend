var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Session = require('../models/session');


// Connecting to my mongodb
const dbURI = 'mongodb+srv://dbUser:feeble-backend@feeble-backend.vutul.mongodb.net/feeble-backend?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('uppkopplad mot databasen'))
  .catch((err) => console.log(err));





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

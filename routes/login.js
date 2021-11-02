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



router.get('/', function (req, res, next) {
  res.send("this is the login route")
});


// Post route där vi tar emot username och password
router.post('/', function (req, res, next) {

  User.find({ username: req.body.Username })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        if (user[0].password === req.body.Password) {
          console.log('user match username and password');
          res.status(201).json({ message: `Användare: ${req.body.Username} inloggad` });
        } else {
          console.log('wrong password');
          res.status(422).json({
            message: 'Fel lösenord'
          })
        }
      }
      else {
        console.log('user not found');
        res.status(422).json({ message: `Användare inte hittad` });
      }
    })
    .catch((err) => console.log(err));
})







module.exports = router;

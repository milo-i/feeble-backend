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

  // console.log('rad 24', req.body.Username);


  User.find({ username: req.body.Username })
    .exec()
    .then(user => {
      console.log('rad 30', user);
      if (user.length >= 1) {
        // console.log(typeof req.body.Password);
        console.log('rad 33 USER', user[0])
        console.log('rad 34 USER', user[0].password)

        if (user[0].password == req.body.Password) {
          console.log('user match username and password');
        } else {
          console.log('wrong password');

        }

      }
      else {
        console.log('user not found');
      }


    })
    .catch((err) => console.log(err));

  res.json(req.body);

})







module.exports = router;

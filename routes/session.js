var express = require('express');
var router = express.Router();
const Session = require('../models/session');


/*Add new sessions*/
router.post('/add', function (req, res, next) {
  //const { userId, sessionId, location, time, users } = req.body;
  const { userName, sessionId, date, city, street, users } = req.body;
  console.log(req.body);

   const session = new Session({
     userName,
     sessionId,
     city,
     street,
     date,
     users
   })
  
  session.save()
  res.send("new session saved")
});



/* Get all sessions*/
router.get('/', function (req, res, next) {

  Session.find().
    then(session => {

      console.log(session);

      res.json(session);
    })
});

module.exports = router;


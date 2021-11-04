var express = require('express');
var router = express.Router();
const Session = require('../models/session');
const User = require('../models/user');


/*Add new sessions*/
router.post('/add', function (req, res, next) {
  const { userId, sessionId, location, street, time, users } = req.body;

  const session = new Session({
    userId,
    sessionId,
    location,
    street,
    time,
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


// Add session to db
router.post('/add', (req, res, next) => {

  // Receive username and sessionId

  const { userName, sessionId } = req.body;



  // med sessionId matchar jag det id:et med databas sessionid


  // uppdatera arrayen med users och lägg till username där om det inte finns ett sånt username sen tidigare

})



module.exports = router;


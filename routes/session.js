var express = require('express');
var router = express.Router();
const Session = require('../models/session');
const User = require('../models/user');


/*Add new sessions*/
router.post('/add', (req, res, next) => {

  //const { userId, sessionId, location, time, users } = req.body;
  const { userName, sessionId, date, city, street, users } = req.body;

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
router.get('/', (req, res, next) => {

  Session.find().
    then(session => {

      console.log(session);

      res.json(session);
    })
});


// Check sessionId and compare with sessionId to db
router.post('/check', (req, res, next) => {

  // Receive username and sessionId

  // const { userName, sessionId } = req.body;

  // med sessionId matchar jag det id:et med databas sessionid

  Session.find({ sessionId: req.body.sessionId }, (err, sessions) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sessions', sessions[0]);
      sessions[0].users.push(req.body.userName);
      console.log('NYA', sessions);
      res.json(sessions);
    }
  })
  // .
  //   then(session => {
  //     console.log(session);
  //     console.log(sessionId);
  //   })


  // uppdatera arrayen med users och lägg till username där om det inte finns ett sånt username sen tidigare

})



module.exports = router;


// post fetch

// username
// sessionId

// session / join

// find the session id and match it

// uppdate array in db with the username from the post

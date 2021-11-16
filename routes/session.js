var express = require('express');
var router = express.Router();
const Session = require('../models/session');


/*Add new sessions*/
router.post('/add', (req, res, next) => {


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

  Session.findOne({ sessionId: req.body.sessionId }).exec().
    then(doc => {
      console.log(doc);
      let flag = true;

      for (const val of doc.users) {
        console.log('Value: ', val);

        if (val == req.body.userName) {
          console.log('matchning', val);
          flag = false;

        }
      }
      if(flag){

        doc.users.push(req.body.userName);
      }

      doc.save()
      res.json({ participants: doc.users });

    })



})




module.exports = router;


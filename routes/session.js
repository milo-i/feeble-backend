var express = require('express');
var router = express.Router();
const Session = require('../models/session');


/*Get all sessions*/

/*Add new sessions*/
router.post('/add', function(req, res, next){
    const {userId, sessionId, location, time, users}= req.body;
   
     const session = new Session ({
        userId,
        sessionId,
        location,
        time, 
        users
    })
    session.save()
    res.send("new session saved")
});




/* GET users listing. */
router.get('/', function (req, res, next) {


  Session.find().
    then(session => {

      console.log(session);

      res.json(session);
    })
});

module.exports = router;


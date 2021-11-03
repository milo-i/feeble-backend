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

module.exports = router;
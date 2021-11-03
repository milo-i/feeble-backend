var express = require('express');
var router = express.Router();
const Session = require('../models/session');


/* GET users listing. */
router.get('/', function (req, res, next) {


  Session.find().
    then(session => {

      console.log(session);

      res.json(session);
    })
});

module.exports = router;

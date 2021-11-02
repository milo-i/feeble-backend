var express = require('express');
var router = express.Router();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("this is the login route")
  });

router.post('/', function(req, res, next){
   console.log( req.body);
   res.json('lyckad', req.body);
   
})







module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Express from Coolio on ${process.env.SERVER}` });
});

module.exports = router;

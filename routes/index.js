var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// GET home page.
router.get("catalogo", function (req, res) {
  res.redirect("/catalog");
});
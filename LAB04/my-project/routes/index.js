var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET actor1 page. */
router.get('/actor1', function(req, res, next) {
  res.render('actor1');
});
/* GET actor1 page. */
router.get('/actor2', function(req, res, next) {
  res.render('actor2');
});
/* GET actor1 page. */
router.get('/actor3', function(req, res, next) {
  res.render('actor3');
});
/* GET actor1 page. */
router.get('/actor4', function(req, res, next) {
  res.render('actor4');
});

module.exports = router;

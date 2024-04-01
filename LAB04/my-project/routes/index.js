var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actor1', function(req, res, next) {
  res.render('actor1');
});

router.get('/actor2', function(req, res, next) {
  res.render('actor2');
});

router.get('/actor3', function(req, res, next) {
  res.render('actor3');
});

router.get('/actor4', function(req, res, next) {
  res.render('actor4');
});

module.exports = router;


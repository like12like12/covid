var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.get('/favorite', function(req, res, next) {
  res.render('favorite', { title: 'favorite' });
});

router.get('/result', function(req, res, next) {
  res.render('result', { title: 'result' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jill', function(req, res, next) {
  res.render('jill');
});

router.get('/nitisha', function(req, res, next) {
  res.render('nitisha');
});

router.get('/jay', function(req, res, next) {
  res.render('jay');
});  

router.get('/parth', function(req, res, next) {
    res.render('parth');  
});


module.exports = router;

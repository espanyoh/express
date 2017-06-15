var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('user get requested : ',req);
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('user post requested : ',req);
  res.send('respond with a resource from post');
});

module.exports = router;

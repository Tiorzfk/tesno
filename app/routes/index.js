var express = require('express');
var user = require('../controllers/user');
var router = express.Router();

router.route('/').get(user.index);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eli\'s Cool Demo App 👍' });
});

router.get('/custom/:customText', function(req, res){
  res.render('index', {title: req.params['customText']})
})
module.exports = router;

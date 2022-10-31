var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', today: 'Shreyas' });
});

router.post('/', function(req, res, next){
  var info = req.body;
  var summation = parseInt(info.first) + parseInt(info.second);
  var data = {
    "result": summation
  };
  res.json(data)
  console.log("Success")
});

module.exports = router;

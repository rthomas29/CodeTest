var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.send([{ name: 'Rakeem', age: 24 }, { name: 'someone', age: 24 }]);
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'Rakeem',
    },
    {
      id: 2,
      name: 'thomas',
    },
  ]);
});

module.exports = router;

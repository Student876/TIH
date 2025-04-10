const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('virtualTours', { title: 'virtualTours' });
});

module.exports = router;

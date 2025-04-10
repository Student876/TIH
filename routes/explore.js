const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('explore', { title: 'Explore Destinations' });
});

module.exports = router;

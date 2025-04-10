const express = require('express');
const router = express.Router();
const recommendPlaces = require('../modules/airecommendation');

// GET AI Recommendations page
router.get('/airecommendation', (req, res) => {
  const preferences = req.query; // ?category=spiritual&region=south
  const suggestions = recommendPlaces(preferences);

  res.render('airecommendation', {
    title: 'AI Recommendations',
    suggestions
  });
});

module.exports = router;

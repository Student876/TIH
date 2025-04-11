const express = require('express');
const router = express.Router();
const recommendPlaces = require('../modules/airecommendation');

// ✅ Make sure the path matches exactly
router.get('/ai-recommendations', (req, res) => {
  const preferences = req.query;
  const suggestions = recommendPlaces(preferences);

  res.render('airecommendation', {
    title: 'AI Recommendations',
    suggestions
  });
});

module.exports = router;

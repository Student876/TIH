const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('chatbot', { title: 'AI Chatbot' });
});

module.exports = router;


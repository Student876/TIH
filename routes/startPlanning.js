const express = require('express');
const router = express.Router();

const mainService = require('../modules/main');

router.get('/', async (req, res) => {
  const featured = await mainService.getFeaturedDestinations();
  res.render('index', { title: 'Home', featured });
});

router.get('/startPlanning', (req, res) => {
    console.log("✅ /startPlanning route hit");
    res.render('startPlanning', { title: 'Plan Your Journey' });
  });

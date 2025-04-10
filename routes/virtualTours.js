const express = require('express');
const router = express.Router();
const virtualToursService = require('../modules/virtualTours');
const Destination = require('../models/Destinations');  



router.get('/', async (req, res) => {
  const tours = await virtualToursService.getVirtualTours();
  res.render('virtualTours', { title: 'Virtual Tours', tours });
});

module.exports = router;

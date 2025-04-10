const Destination = require('../models/Destination');

// Fetch featured destinations for homepage (e.g., top 4)
async function getFeaturedDestinations() {
  return await Destination.find().limit(4);
}

module.exports = {
  getFeaturedDestinations
};

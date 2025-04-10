const Itinerary = require('../models/itinerary');

// Create a new itinerary
async function createItinerary(userId, title, destinations) {
  const itinerary = new Itinerary({ userId, title, destinations });
  return await itinerary.save();
}

// Get all itineraries for a user
async function getItinerariesByUser(userId) {
  return await Itinerary.find({ userId });
}

module.exports = {
  createItinerary,
  getItinerariesByUser
};

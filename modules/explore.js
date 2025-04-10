const Destination = require('../models/Destination');

// Get all destinations (optionally filter by region or category)
async function getAllDestinations(filter = {}) {
  return await Destination.find(filter);
}

// Get destination by ID
async function getDestinationById(id) {
  return await Destination.findById(id);
}

module.exports = {
  getAllDestinations,
  getDestinationById
};

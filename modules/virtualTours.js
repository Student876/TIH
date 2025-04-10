const Destination = require('../models/Destination');

// Fetch all destinations with virtual tour links
async function getVirtualTours() {
  return await Destination.find({ virtualTourUrl: { $exists: true, $ne: '' } });
}

// Fetch a specific virtual tour by ID
async function getVirtualTourById(id) {
  return await Destination.findById(id);
}

module.exports = {
  getVirtualTours,
  getVirtualTourById
};

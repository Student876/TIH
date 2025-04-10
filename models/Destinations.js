const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  region: String,
  description: String,
  category: [String], // e.g., ['adventure', 'spiritual']
  imageUrl: String,
  virtualTourUrl: String
});

module.exports = mongoose.model('Destination', destinationSchema);

const mongoose = require('mongoose');

const culturalInsightSchema = new mongoose.Schema({
  title: String,
  description: String,
  region: String,
  tags: [String],
  imageUrl: String
});

module.exports = mongoose.model('CulturalInsight', culturalInsightSchema);

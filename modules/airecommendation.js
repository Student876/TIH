// modules/aiRecommendation.js

// Dummy data set (You can later replace this with database calls or ML logic)
const destinations = [
    { name: 'Varanasi', category: 'spiritual', region: 'north' },
    { name: 'Rishikesh', category: 'spiritual', region: 'north' },
    { name: 'Hampi', category: 'history', region: 'south' },
    { name: 'Mysore', category: 'history', region: 'south' },
    { name: 'Manali', category: 'adventure', region: 'north' },
    { name: 'Goa', category: 'relaxation', region: 'west' },
    { name: 'Kolkata', category: 'cultural', region: 'east' }
  ];
  
  // Main logic function
  function recommendPlaces({ category, region }) {
    let filtered = destinations;
  
    if (category) {
      filtered = filtered.filter(dest => dest.category.toLowerCase() === category.toLowerCase());
    }
  
    if (region) {
      filtered = filtered.filter(dest => dest.region.toLowerCase() === region.toLowerCase());
    }
  
    return filtered.map(dest => dest.name); // just return names
  }
  
  module.exports = recommendPlaces;
  
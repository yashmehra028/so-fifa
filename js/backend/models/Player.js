const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  overall_rating: {
    type: String
  },
  potential: {
    type: String
  },
  value: {
    type: String
  },
  wage: {
    type: String
  },
  crossing: {
    type: String
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);
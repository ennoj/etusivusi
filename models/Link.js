const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  category: {
    type: String,
    default: 'user',
    required: true
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;

const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;

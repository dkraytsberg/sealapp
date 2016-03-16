var mongoose = require('mongoose');

var buttonSchema = mongoose.Schema({
  name: String,
  presses: Number,
});

module.exports = mongoose.model('Button', buttonSchema);

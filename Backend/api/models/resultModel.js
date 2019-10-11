'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ResultSchema = new Schema({
  date: {
    type: Number
  },
  username: {
    type: String
  },
  result: {
    type: Number
  }
});

module.exports = mongoose.model('Results', ResultSchema);
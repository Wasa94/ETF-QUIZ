'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnagramSchema = new Schema({
    problem: {
        type: String
    },
    solution: {
        type: String
    }
});

module.exports = mongoose.model('Anagrams', AnagramSchema);
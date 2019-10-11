'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameOfTheDaySchema = new Schema({
    date: {
        type: Number
    },
    anagram: {
        type: String
    },
    fiveByFive: {
        type: String
    },
    chalice: {
        type: String
    }
});

module.exports = mongoose.model('GameOfTheDays', GameOfTheDaySchema);
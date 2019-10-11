'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FiveByFiveSchema = new Schema({
    first: {
        type: String
    },
    second: {
        type: String
    },
    third: {
        type: String
    },
    fourth: {
        type: String
    },
    fifth: {
        type: String
    }
});

module.exports = mongoose.model('FiveByFives', FiveByFiveSchema);
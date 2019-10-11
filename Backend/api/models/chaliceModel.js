'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChaliceSchema = new Schema({
    question_9_1: {
        type: String
    },
    question_8_1: {
        type: String
    },
    question_7_1: {
        type: String
    },
    question_6_1: {
        type: String
    },
    question_5_1: {
        type: String
    },
    question_4_1: {
        type: String
    },
    question_3: {
        type: String
    },
    question_4_2: {
        type: String
    },
    question_5_2: {
        type: String
    },
    question_6_2: {
        type: String
    },
    question_7_2: {
        type: String
    },
    question_8_2: {
        type: String
    },
    question_9_2: {
        type: String
    },
    answer_9_1: {
        type: String
    },
    answer_8_1: {
        type: String
    },
    answer_7_1: {
        type: String
    },
    answer_6_1: {
        type: String
    },
    answer_5_1: {
        type: String
    },
    answer_4_1: {
        type: String
    },
    answer_3: {
        type: String
    },
    answer_4_2: {
        type: String
    },
    answer_5_2: {
        type: String
    },
    answer_6_2: {
        type: String
    },
    answer_7_2: {
        type: String
    },
    answer_8_2: {
        type: String
    },
    answer_9_2: {
        type: String
    }
});

module.exports = mongoose.model('Chalices', ChaliceSchema);
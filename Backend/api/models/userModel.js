'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    type: {
        type: String,
        enum: ['Player', 'Supervisor', 'Administrator']
    },
    email: {
        type: String
    },
    occupation: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    jmbg: {
        type: String
    },
    image: {
      type: String
    },
    securityQuestion: {
        type: String
    },
    answer: {
        type: String
    },
    activated: {
        type: Boolean,
        default: null
    }
});

module.exports = mongoose.model('Users', UserSchema);
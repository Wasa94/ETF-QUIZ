'use strict';

var mongoose = require('mongoose'),
    Anagram = mongoose.model('Anagrams');

exports.create = function (req, res) {
    var new_anagram = new Anagram(req.body);
    new_anagram.save(function (err, anagram) {
        if (err)
            res.send(err);
        res.json(anagram);
    });
};

exports.get_all = function (req, res) {
    Anagram.find({ }, function (err, anagrams) {
        if (err)
            res.send(err);
        res.json(anagrams);
    });
};

exports.get = function (req, res) {
    Anagram.findById(req.params.id, function (err, anagram) {
        if (err)
            res.send(err);
        res.json(anagram);
    });
};
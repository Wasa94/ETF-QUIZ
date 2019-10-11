'use strict';

var mongoose = require('mongoose'),
    FiveByFive = mongoose.model('FiveByFives');

exports.create = function (req, res) {
    var new_fiveByFive = new FiveByFive(req.body);
    new_fiveByFive.save(function (err, fiveByFive) {
        if (err)
            res.send(err);
        res.json(fiveByFive);
    });
};

exports.get_all = function (req, res) {
    FiveByFive.find({ }, function (err, fiveByFive) {
        if (err)
            res.send(err);
        res.json(fiveByFive);
    });
};

exports.get = function (req, res) {
    FiveByFive.findById(req.params.id, function (err, fiveByFive) {
        if (err)
            res.send(err);
        res.json(fiveByFive);
    });
};
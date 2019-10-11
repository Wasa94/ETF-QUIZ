'use strict';

var mongoose = require('mongoose'),
    Chalice = mongoose.model('Chalices');

exports.create = function (req, res) {
    var new_chalice = new Chalice(req.body);
    new_chalice.save(function (err, chalice) {
        if (err)
            res.send(err);
        res.json(chalice);
    });
};

exports.get_all = function (req, res) {
    Chalice.find({ }, function (err, chalices) {
        if (err)
            res.send(err);
        res.json(chalices);
    });
};

exports.get = function (req, res) {
    Chalice.findById(req.params.id, function (err, chalice) {
        if (err)
            res.send(err);
        res.json(chalice);
    });
};
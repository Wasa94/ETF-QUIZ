'use strict';

var mongoose = require('mongoose'),
    Result = mongoose.model('Results');

exports.get_month = function (req, res) {
    var date = new Date(new Date().setDate(1));
    Result.find({
        date: {
            $gte: date.setHours(0, 0, 0, 0)
        }
    }, function (err, results) {
        if (err)
            res.send(err);
        res.json(results);
    }).sort([['result', -1]]);
};

exports.get_today = function (req, res) {
    var date = new Date();
    Result.find({
        date: {
            $gte: date.setHours(0, 0, 0, 0)
        }
    }, function (err, results) {
        if (err)
            res.send(err);
        res.json(results);
    }).limit(10).sort([['result', -1]]);
};

exports.get = function (req, res) {
    var oneday = 24 * 60 * 60 * 1000;
    var date = new Date(Date.now() - (19 * oneday));
    Result.find({
        date: {
            $gte: date.setHours(0, 0, 0, 0)
        }
    }, function (err, results) {
        if (err)
            res.send(err);
        res.json(results);
    }).sort([['result', -1]]);
};

exports.save = function (req, res) {
    var new_result = new Result(req.body);
    new_result.save(function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};
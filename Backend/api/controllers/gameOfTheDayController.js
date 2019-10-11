'use strict';

var mongoose = require('mongoose'),
    GameOfTheDay = mongoose.model('GameOfTheDays'),
    Result = mongoose.model('Results');

exports.get_all_dates = function (req, res) {
    GameOfTheDay.find({
        date: {
            $gte: new Date().setHours(0, 0, 0, 0)
        }
    }, function (err, gameOfTheDay) {
        if (err)
            res.send(err);
        res.json(gameOfTheDay);
    }).select('date');
};

exports.create = function (req, res) {
    var new_gameOfTheDay = new GameOfTheDay(req.body);

    GameOfTheDay.deleteMany({
        date: new_gameOfTheDay.date
    }, function (err) {
        if (err)
            console.log(error);
    });

    new_gameOfTheDay.save(function (err, gameOfTheDay) {
        if (err)
            res.send(err);
        res.json(gameOfTheDay);
    });
};

exports.get_game = function (req, res) {
    GameOfTheDay.find({ date: req.params.date }, function (err, gameOfTheDay) {
        if (err)
            res.send(err);
        if (gameOfTheDay.length > 0)
            res.json(gameOfTheDay[0]);
        else
            res.status(400).send('Game of the day not found!');
    });
};

exports.played = function (req, res) {
    Result.find({ username: req.params.username, date: new Date().setHours(0, 0, 0, 0) }, function (err, result) {
        if (err)
            res.send(err);
            
        if (result.length > 0)
            res.json(true);
        else
            res.json(false);
    });
};
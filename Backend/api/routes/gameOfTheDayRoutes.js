'use strict';
module.exports = function (app) {
    var gameOfTheDay = require('../controllers/gameOfTheDayController');

    app.route('/gamesOfTheDay')
        .put(gameOfTheDay.create)
        .get(gameOfTheDay.get_all_dates);


    app.route('/gamesOfTheDay/:date')
        .get(gameOfTheDay.get_game)

    app.route('/gamesOfTheDayPlayed/:username')
        .get(gameOfTheDay.played)
};
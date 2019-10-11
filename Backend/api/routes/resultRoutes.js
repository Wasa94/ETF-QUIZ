'use strict';
module.exports = function (app) {
    var result = require('../controllers/resultController');

    // todoList Routes
    app.route('/results')
        .get(result.get)
        .put(result.save);


    app.route('/resultsMonth')
        .get(result.get_month);

    app.route('/resultsToday')
        .get(result.get_today);
};
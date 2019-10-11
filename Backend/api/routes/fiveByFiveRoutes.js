'use strict';
module.exports = function (app) {
  var fiveByFives = require('../controllers/fiveByFiveController');

  app.route('/5x5')
    .put(fiveByFives.create)
    .get(fiveByFives.get_all);

  app.route('/fiveByFives/:id')
    .get(fiveByFives.get)
};
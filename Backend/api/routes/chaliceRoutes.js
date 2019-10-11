'use strict';
module.exports = function (app) {
  var chalices = require('../controllers/chaliceController');

  app.route('/chalices')
    .put(chalices.create)
    .get(chalices.get_all);

  app.route('/chalices/:id')
    .get(chalices.get)
};
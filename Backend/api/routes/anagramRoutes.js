'use strict';
module.exports = function (app) {
  var anagrams = require('../controllers/anagramController');

  app.route('/anagrams')
    .put(anagrams.create)
    .get(anagrams.get_all);

  app.route('/anagrams/:id')
    .get(anagrams.get)
};
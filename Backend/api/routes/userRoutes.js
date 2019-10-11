'use strict';
module.exports = function (app) {
  var users = require('../controllers/userController');

  app.route('/users')
    .post(users.login)
    .put(users.register)
    .get(users.administration);

  app.route('/users/:username')
    .put(users.approve);

  app.route('/usersChangePassword')
    .post(users.change_password);

  app.route('/usersForgotPassword')
    .post(users.forgot_password);

  app.route('/usersForgotPasswordNew')
    .post(users.forgot_password_new);
};
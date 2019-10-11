'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.register = function (req, res) {
    User.find({ username: req.body.username }, function (err, user) {
        if (err)
            res.send(err);
        if (user.length > 0)
            res.status(404).send({ message: 'Username already exists!' });
        else {
            var new_user = new User(req.body);
            var shasum = crypto.createHash('sha256');
            shasum.update(new_user.password);
            new_user.password = shasum.digest('hex');
            new_user.save(function (err, user) {
                if (err)
                    res.send(err);
                res.json({ status: true });
            });
        }
    });
};

exports.login = function (req, res) {
    User.find({ username: req.body.username }, function (err, user) {
        if (err)
            res.send(err);
        if (user.length === 0)
            res.status(404).send({ message: 'User not found' });
        else {
            var shasum = crypto.createHash('sha256');
            shasum.update(req.body.password);
            var password = shasum.digest('hex');
            if (!user[0].activated)
                res.status(404).send({ message: 'User is not activated!' });
            else if (user[0].password == password)
                res.json(user[0]);
            else
                res.status(404).send({ message: 'Wrong password!' });
        }
    });
}

exports.administration = function (req, res) {
    User.find({ activated: null }, function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
}

exports.approve = function (req, res) {
    User.findOneAndUpdate({ username: req.params.username }, { activated: req.body.status }, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ status: true });
    });
};

exports.change_password = function (req, res) {
    var shasum = crypto.createHash('sha256');
    shasum.update(req.body.oldPassword);
    console.log(req.body);
    var oldPassword = shasum.digest('hex');
    console.log(oldPassword);
    var shasum2 = crypto.createHash('sha256');
    shasum2.update(req.body.newPassword);
    var newPassword = shasum2.digest('hex');
    User.findOneAndUpdate({ username: req.body.username, password: oldPassword }, { password: newPassword }, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        if (user)
            res.json(true);
        else
            res.json(false);
    });
};

exports.forgot_password = function (req, res) {
    console.log(req.body);
    User.find({ username: req.body.username, jmbg: req.body.jmbg }, function (err, user) {
        if (err)
            res.send(err);
        if (user.length === 0)
            res.status(404).send({ message: 'User not found' });
        else
            res.json(user[0]);
    });
};
exports.forgot_password_new = function (req, res) {
    var shasum = crypto.createHash('sha256');
    shasum.update(req.body.password);
    var newPassword = shasum.digest('hex');
    User.findOneAndUpdate({ username: req.body.username }, { password: newPassword }, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        if (user)
            res.json(true);
        else
            res.json(false);
    });
};

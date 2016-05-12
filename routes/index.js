module.exports = function(app, passport) {
    app.get('/', checkIfLoggedIn, function(req, res) {
        res.render('index.ejs', {user: req.user});
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    // req.flash('message', 'Vous devez être connecté pour accéder à ce site');
    res.redirect('/login');
}

/*
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('user');

router.get('/', function(req, res, next) {
	User.find().exec(function(err, User){
		res.render('index.ejs', {
			User : User
		});
	});
});

module.exports = router;
*/
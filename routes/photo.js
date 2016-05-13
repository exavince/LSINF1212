var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = function(app, passport) {

    app.get('/photo', checkIfLoggedIn, function(req, res, next) {
	   res.render('photo.ejs');
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

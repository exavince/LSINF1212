var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = function(app, passport) {

    app.get('/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

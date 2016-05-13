var mongoose = require('mongoose');
var User = mongoose.model('user');


module.exports = function(app, passport) {

    app.get('/', checkIfLoggedIn, function(req, res) {
        res.render('index.ejs', {
          user: req.user
        });
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

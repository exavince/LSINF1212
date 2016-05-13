var mongoose = require('mongoose');
var Staff = mongoose.model('staffs');
var User = mongoose.model('user');

module.exports = function(app, passport) {

    app.get('/staffview', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Staff.find().exec(function(err, Staff){
            res.render('staffview.ejs', {
                user: req.user,
                id : id,
                Staff : Staff.reverse()
            });
        });
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

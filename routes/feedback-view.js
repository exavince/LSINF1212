var mongoose = require('mongoose');
var Feedback = mongoose.model('feedbacks');
var User = mongoose.model('user');


module.exports = function(app, passport) {
    app.get('/feedbackview', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Feedback.find().exec(function(err, Feedback){
            res.render('feedback-view.ejs', {
                user : req.user,
                id : id,
                Feedback : Feedback.reverse()
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

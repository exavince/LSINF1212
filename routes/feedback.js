var mongoose = require('mongoose');
var Feedback = mongoose.model('feedbacks');
var User = mongoose.model('user');

module.exports = function(app, passport) {

    app.get('/feedback', checkIfLoggedIn, function(req, res) {
        var id = req.query.id;
        Feedback.find().exec(function(err, Feedback){
            if (id) {
                Feedback.forEach(function(el){
                    if (el.id == id) {
                        el.remove(function(err, el){
                            res.redirect('/feedback');
                        });
                    }
                });
            }
            else {
                res.render('feedback.ejs', {
                    Feedback : Feedback.reverse()
                });
            }
        });
    });

    app.post('/feedback', function(req, res) {
        new Feedback({
            user : req.user.username,
            date : req.body.date,
            feedback : req.body.feedback,
            type : req.body.type})
      .save(function(err, feedback) {
        console.log(feedback)
        res.redirect('/feedback');
      });
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

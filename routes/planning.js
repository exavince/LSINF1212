var mongoose = require('mongoose');
var Absent = mongoose.model('absents');
var User = mongoose.model('user');


module.exports = function(app, passport) {

    app.get('/planning', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Absent.find().exec(function(err, Absent){
            if (id) {
                Absent.forEach(function(el){
                    if (el.id == id) {
                        el.remove(function(err, el){
                            res.redirect('/planning');
                        });
                    }
                });
            }
            else {
                res.render('planning.ejs', {
                    Absent : Absent.reverse()
                });
            }
        });
    });

    app.post('/planning', function(req, res) {
        new Absent({
            user : req.user.username,
            date : req.body.date,
            cause : req.body.cause})
      .save(function(err, absent) {
        console.log(absent)
        res.redirect('/planning');
      });
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

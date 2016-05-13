var mongoose = require('mongoose');
var Staff = mongoose.model('staffs');
var User = mongoose.model('user');


module.exports = function(app, passport) {

    app.get('/staff', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Staff.find().exec(function(err, Staff){
            if (id) {
                Staff.forEach(function(el){
                    if (el.id == id) {
                        el.remove(function(err, el){
                            res.redirect('/staff');
                        });
                    }
                });
            }
            else {
                res.render('staff.ejs', {
                    user : req.user,
                    Staff : Staff.reverse()
                });
            }
        });
    });

    app.post('/staff', function(req, res) {
        new Staff({
            user : req.user.username,
            date : req.body.date,
            type : req.body.type,
            quoi : req.body.quoi})
      .save(function(err, feedback) {
        console.log(feedback)
        res.redirect('/staff');
      });
    });
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}

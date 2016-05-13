var mongoose = require('mongoose');
var Absent = mongoose.model('absents');
var User = mongoose.model('user');

module.exports = function(app, passport) {

  app.get('/planningview', checkIfLoggedIn, function(req, res, next) {
      var id = req.query.id;
      Absent.find().exec(function(err, Absent){
          res.render('planning-view.ejs', {
              user: req.user,
              id : id,
              Absent : Absent.reverse()
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

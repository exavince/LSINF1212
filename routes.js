var mongoose = require('mongoose');

var Feedback = mongoose.model('feedbacks');
var Staff = mongoose.model('staffs');
var Absent = mongoose.model('absents');
var User = mongoose.model('user');


module.exports = function(app, passport) {
    
    app.get('/', checkIfLoggedIn, function(req, res) {
        res.render('index.ejs', {user: req.user});
    });
    
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
            user : req.body.user,
            date : req.body.date,
            feedback : req.body.feedback,
            type : req.body.type})
      .save(function(err, feedback) {
        console.log(feedback)
        res.redirect('/feedback');
      });
    });
    
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
                    Staff : Staff.reverse()
                });
            }
        });
    });
    
    app.post('/staff', function(req, res) {
        new Staff({
            user : req.body.user,
            date : req.body.date,
            type : req.body.type,
            quoi : req.body.quoi})
      .save(function(err, feedback) {
        console.log(feedback)
        res.redirect('/staff');
      });
    });
    
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
            user : req.body.user,
            date : req.body.date,
            cause : req.body.cause})
      .save(function(err, absent) {
        console.log(absent)
        res.redirect('/planning');
      });
    });
    
    app.get('/photo', checkIfLoggedIn, function(req, res, next) {
	   res.render('photo.ejs');
    });
    
    app.get('/feedbackview', checkIfLoggedIn, function(req, res) {
        var id = req.query.id;
        Feedback.find().exec(function(err, Feedback){
            res.render('feedback-view.ejs', {
                id : id,
                Feedback : Feedback
            });
        });
    });
    
    app.get('/staffview', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Staff.find().exec(function(err, Staff){
            res.render('staffview.ejs', {
                id : id,
                Staff : Staff.reverse()
            });
        });
    });
    
    app.get('/planningview', checkIfLoggedIn, function(req, res, next) {
        var id = req.query.id;
        Absent.find().exec(function(err, Absent){
            res.render('planningview.ejs', {
                id : id,
                Absent : Absent.reverse()
            });
        });
    });
    
    app.get('/login', function(req, res) {
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
    
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
    
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));
    
    app.get('/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    });
    
    // error handlers
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
    
};

function checkIfLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    req.flash('loginMessage', 'Vous devez être connecté pour accéder à cette partie du site');
    res.redirect('/login');
}
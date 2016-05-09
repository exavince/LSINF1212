module.exports = function(app, passport) {
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));
}
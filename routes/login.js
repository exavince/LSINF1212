module.exports = function(app, passport) {
    app.get('/login', function(req, res) {
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
    
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
}
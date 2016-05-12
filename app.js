// mongoose config
require('./database');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');

/*
var index = require('./routes/index.js');
var feedback = require('./routes/feedback.js');
var photo = require('./routes/photo.js');
var planning = require('./routes/planning.js');
var staff = require('./routes/staff.js');
var logout = require('./routes/logout.js');
var feedbackview = require('./routes/feedback-view.js');
var staffview = require('./routes/staffview');
var planningview = require('./routes/planningview');
// var login = require('./routes/login.js');
// var signup = require('./routes/signup.js');
*/

var app = express();

require('./passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use(session({secret: 'supersecret', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes.js')(app, passport);
/*
require('./routes/index')(app, passport);
require('./routes/login')(app, passport);
require('./routes/signup')(app, passport);

// app.use('/', index);
app.use('/feedback', feedback);
app.use('/planning', planning);
app.use('/staff', staff);
app.use('/photo', photo);
app.use('/logout', logout);
app.use('/feedbackview', feedbackview);
app.use('/staffview', staffview);
app.use('/planningview', planningview);
// app.use('/login', login);
// app.use('/signup', signup);
*/

/*
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
*/
module.exports = app;

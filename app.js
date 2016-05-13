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
var app = express();

require('./database');
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


require('./routes/index')(app, passport);
require('./routes/login')(app, passport);
require('./routes/signup')(app, passport);
require('./routes/feedback-view')(app, passport);
require('./routes/feedback')(app, passport);
require('./routes/logout')(app, passport);
require('./routes/planning')(app, passport);
require('./routes/planningview')(app, passport);
require('./routes/staff')(app, passport);
require('./routes/staffview')(app, passport);
require('./routes/photo')(app, passport);


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


module.exports = app;

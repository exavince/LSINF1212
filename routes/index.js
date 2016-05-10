var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('user');

router.get('/', function(req, res, next) {
	User.find().exec(function(err, User){
		res.render('index.ejs', {
			User : User
		});
	});
});

module.exports = router;

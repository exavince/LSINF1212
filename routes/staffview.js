var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Staff = mongoose.model('staffs');

router.get('/', function(req, res, next) {
	var id = req.query.id;
	Staff.find().exec(function(err, Staff){
		res.render('staffview', {
			id : id,
			Staff : Staff.reverse()
		});
	});
});


module.exports = router;

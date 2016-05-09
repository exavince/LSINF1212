var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = mongoose.model('feedbacks');

router.get('/', function(req, res) {
	var id = req.query.id;
	Feedback.find().exec(function(err, Feedback){
		res.render('feedback-view.ejs', {
			id : id,
			Feedback : Feedback
		});
	});
});

module.exports = router;

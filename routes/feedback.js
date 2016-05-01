var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = mongoose.model('feedbacks');

router.get('/', function(req, res, next) {
	res.render('feedback.ejs');
});

router.post('/', function(req, res) {
	new Feedback({
		user : req.body.user,
		date : req.body.date,
		feedback : req.body.feedback,
		type : req.body.type})
  .save(function(err, feedback) {
    console.log(feedback)
    res.redirect('feedback');
  });
});

module.exports = router;

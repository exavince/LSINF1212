var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Staff = mongoose.model('staffs');

router.get('/', function(req, res, next) {
	res.render('staff.ejs');
});

router.post('/', function(req, res) {
	new Staff({
		user : req.body.user,
		date : req.body.date,
		type : req.body.type,
		quoi : req.body.quoi})
  .save(function(err, feedback) {
    console.log(feedback)
    res.redirect('staff');
  });
});

module.exports = router;

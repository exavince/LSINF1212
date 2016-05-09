var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Absent = mongoose.model('absents');

router.get('/', function(req, res, next) {
	Absent.find().exec(function(err, Absent){
		res.render('planning', {
			Absent : Absent.reverse()
		});
	});
});

router.post('/', function(req, res) {
	new Absent({
		user : req.body.user,
		date : req.body.date,
		cause : req.body.cause})
  .save(function(err, absent) {
    console.log(absent)
    res.redirect('planning');
  });
});

module.exports = router;

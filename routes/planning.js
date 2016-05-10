var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Absent = mongoose.model('absents');

router.get('/', function(req, res, next) {
	var id = req.query.id;
	Absent.find().exec(function(err, Absent){
		if (id) {
			Absent.forEach(function(el){
				if (el.id == id) {
					el.remove(function(err, el){
						res.redirect('planning');
					});
				}
			});
		}
		else {
			res.render('planning', {
				Absent : Absent.reverse()
			});
		}
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

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Absent = mongoose.model('absents');

router.get('/', function(req, res, next) {
	var id = req.query.id;
	Absent.find().exec(function(err, Absent){
		res.render('planning-view', {
			id : id,
			Absent : Absent.reverse()
		});
	});
});


module.exports = router;

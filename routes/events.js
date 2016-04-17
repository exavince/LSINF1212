var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('events.ejs');
});

router.post('/AddAbsence', function(req, res) {
	var db = req.db;
	var date = req.body.date;
	var cause = req.body.cause;
	var collection = db.get('absence');

	collection.insert({
		"username" : "Vincent",
		"date" : date,
		"cause" : cause
		}, function (err, doc) {
			if (err) {
				res.send("There was a problem adding the information to the database.");
			}
			else {
				res.redirect("/events");
			}
	});
});

module.exports = router;

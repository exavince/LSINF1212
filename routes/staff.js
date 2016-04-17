var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('staff.ejs');
});

router.post('/AddStaff', function(req, res) {
	var db = req.db;
	var date = req.body.date;
	var type = req.body.type;
	var cause = req.body.quoi;
	var collection = db.get('staff');

	collection.insert({
		"username" : "Vincent",
		"date" : date,
		"type" : type,
		"quoi" : cause
		}, function (err, doc) {
			if (err) {
				res.send("There was a problem adding the information to the database.");
			}
			else {
				res.redirect("/staff");
			}
	});
});

module.exports = router;

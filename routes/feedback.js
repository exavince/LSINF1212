var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('feedback.ejs');
});

router.post('/AddFeedback', function(req, res) {
	var db = req.db;
	var date = req.body.date;
	var feedback= req.body.feedback;
	var type= req.body.type;

	var collection = db.get('feedback');

	collection.insert({
		"username" : "Vincent",
		"date" : date,
		"feedback" : feedback,
		"type" : type
		}, function (err, doc) {
			if (err) {
				res.send("There was a problem adding the information to the database.");
			}
			else {
				res.redirect("/feedback");
			}
	});
});

module.exports = router;

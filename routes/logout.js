var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.logout();
    res.redirect('index');
});

module.exports = router;
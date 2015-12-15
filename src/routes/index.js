var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.render('index', {
		name: 'FIR',
		title: 'React'
	});
});

module.exports = router;
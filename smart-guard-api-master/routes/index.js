var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
	res.json({
		"apiActive" : true,
		"currentUser" : req.user
	}).end();

});

module.exports = router;

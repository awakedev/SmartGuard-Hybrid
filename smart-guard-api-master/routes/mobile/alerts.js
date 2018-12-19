var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var models = require('../../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	// Route data
	let lat = req.query.lat;
	let lng = req.query.lng;

	let dummyData = 
		{
			"alerts" : {
				"wind" : "? mph"
			},
		}
	

	res.json(dummyData).end();

});



router.get("/:id", (req,res)=>{
	
	//

});

router.get("/locate/:userId",(req,res)=>{

	//

})


router.post("/",(req,res)=>{

	//

});

router.delete("/:id", (req,res)=>{

	//

})

module.exports = router;

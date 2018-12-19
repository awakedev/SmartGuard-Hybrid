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
			"weather" : {
				"wind" : "? mph"
			},
			"medical" :[
				{
					"lat": 53.0742,
					"lng" : -2.8630,
					"name" : "Alder Hey Hospital",
					"add1" : "101 Eaton Road"
				}
			],
			"dangers" : [
					{
						"id" : 1,
						"priority" : "HIGH",
						"lat" : 54.0742,
						"lng" : -2.8670,
						"name" : "Rocky Cliff",
						"description" : "These rocks are known to be slippy"
					},
					{
						"id" : 2,
						"priority" : "MEDIUM",
						"lat" : 54.0742,
						"lng" : -2.8690,
						"name" : "Rocky Cliff",
						"description" : "These rocks are known to be slippy"
					},
					{
						"id" : 3,
						"priority" : "LOW",
						"lat" : 54.0742,
						"lng" : -2.8650,
						"name" : "Rocky Cliff",
						"description" : "These rocks are known to be slippy"
					}
				]
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

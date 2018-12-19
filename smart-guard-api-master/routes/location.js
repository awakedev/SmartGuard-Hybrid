var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	let limit = 50;
	let page = req.query.page | 1;
	let offset = (page - 1) * limit;
	let filter = {};

	if (req.query["userId"]) filter["userId"] = req.query["userId"];

	models.LocationPing.findAndCountAll({
		limit: limit,
		offset: offset,
		where: filter
	}).then(pings=>{
		res.json({
			"pings" : pings.rows,
			"page" : page,
			"totalPages" : Math.ceil(pings.count / limit),
			"count" : pings.count
		}).end();
	})

});

router.get("/:id", (req,res)=>{
	
	models.LocationPing.find({
		where:{
			id: req.params.id
		}
	}).then(a=>{
		if (a){
			res.json({
				"article" : a
			}).end();
		}else{
			res.status(404).end();
		}
		
	}).catch(err=>{
		console.log(err);
		res.json(err).end();
	})

});

router.get("/locate/:userId",(req,res)=>{

	let userId = req.params.userId;
	models.LocationPing.locateUser(userId).then(pings=>{

		res.json({
			"recentPings" : pings,
			"userId" : userId
		}).end();

	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})

})


router.post("/",(req,res)=>{


	models.LocationPing.create({
		"lat" : req.body.lat,
		"lng" : req.body.lng,
		"userId" : "DEMO"
	}).then(ping=>{
		res.json({
			"ping" : ping
		}).end();
	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})


});

router.delete("/:id", (req,res)=>{

	models.LocationPing.destroy({
		where : {
			id : req.params.id
		}
	}).then(article=>{
		res.json({
			success : true
		}).end();
	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})

})

module.exports = router;

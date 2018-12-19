var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var models = require('../../models');

router.get("/:id", (req,res)=>{
	
	models.LocationPing.find({
		where:{
			id: req.params.id
		}
	}).then(a=>{
		if (a){
			res.json({
				"ping" : p
			}).end();
		}else{
			res.status(404).end();
		}
		
	}).catch(err=>{
		console.log(err);
		res.json(err).end();
	})

});


/* GET home page. */
router.get('/', function(req, res, next) {
	let limit = 10;
	let page = req.query.page | 1;
	let offset = (page - 1) * limit;
	let filter = {};

	if (req.query["onDevice"]) filter["userId"] = JSON.parse(req.query["userId"]);

	models.LocationPing.findAndCountAll({
		limit: limit,
		offset: offset,
		where: filter
	}).then(pings=>{

		pings.rows = pings.rows.map(ping=>{
			return {
				"id" : ping.id,
				"lat" : Number(ping.lat),
				"lng" : Number(ping.lng),
				"userId" : ping.userId,
				"createdAt" : ping.createdAt,
				"updatedAt" : ping.updatedAt
			}
		})

		res.json({
			"pings" : pings.rows,
			"page" : page,
			"totalPages" : Math.ceil(pings.count / limit),
			"count" : pings.count
		}).end();
	})

});



router.post("/",(req,res)=>{


	models.LocationPing.create({
		"lat" : req.body.lat,
		"lng" : req.body.lng,
		//"userId" : req.user.id
		"userId" : 1
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

	models.Article.destroy({
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

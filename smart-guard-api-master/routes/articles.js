var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var models = require('../models');

router.get("/:id", (req,res)=>{
	
	models.Article.find({
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


/* GET home page. */
router.get('/', function(req, res, next) {
	let limit = 10;
	let page = req.query.page | 1;
	let offset = (page - 1) * limit;
	let filter = {};

	if (req.query["onDevice"]) filter["onDevice"] = JSON.parse(req.query["onDevice"]);
	if (req.query["onWeb"]) filter["onWeb"] = JSON.parse(req.query["onWeb"]);

	models.Article.findAndCountAll({
		limit: limit,
		offset: offset,
		where: filter
	}).then(articles=>{
		res.json({
			"articles" : articles.rows,
			"page" : page,
			"totalPages" : Math.ceil(articles.count / limit),
			"count" : articles.count
		}).end();
	})

});



router.post("/",(req,res)=>{


	models.Article.create({
		"title" : req.body.title,
		"body" : req.body.body
	}).then(article=>{
		res.json({
			"article" : article
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

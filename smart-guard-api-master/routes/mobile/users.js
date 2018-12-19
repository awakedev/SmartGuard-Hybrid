var express = require('express');
var router = express.Router();
var models = require("../../models");


/* GET users listing. */
router.get('/', function(req, res, next) {
  	models.User.findAll({
		where: {}
	}).then(users=>{
		res.json(users).end();
	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})
});




router.post("/complete",(req,res)=>{

	models.User.find({
		id: req.user.id
	}).then(user=>{
		user.completeProfile().then(success=>{
			res.json(user.getJWTData()).end();
		}).catch(err=>{
			console.log(err);
			res.status(500).end();
		})
	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})
	
});


router.delete("/:id", (req,res)=>{

	models.User.destroy({
		where: {
			id: req.params.id
		}
	}).then(success=>{
		res.status(203).end();
	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})

});

module.exports = router;

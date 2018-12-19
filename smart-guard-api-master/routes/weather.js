var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');

var Weather = require("../Weather");
var weather = new Weather("edab11217c1f0b0231156a31edae6133");

/* GET home page. */
router.get('/', function(req, res, next) {
 
rp('http://api.openweathermap.org/data/2.5/forecast?q=Liverpool,us&mode=json').then(data=>{
	res.json(data).end();
}).catch(err=>{
	console.log(err);
	res.status(500).json({}).end();
})
	

});

router.post('/location', (req,res)=>{

	let lat = req.body.lat;
	let lng = req.body.lng;
	let userId = req.body.userId;

	//Location.log(userId,lat,lng);

	weather.getByLatLng(lat,lng).then(data=>{


		res.json(data).end();
		//if (data.alerts.length > 0){
			//Notifications.sendByUserId(userId,data.alerts);
		//}

	}).catch(err=>{
		console.log(err);
		res.status(500).end();
	})

})

module.exports = router;

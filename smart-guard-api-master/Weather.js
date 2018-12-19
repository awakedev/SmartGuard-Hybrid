var request = require("request");
var rp = require("request-promise");

module.exports = class Weather{
		

	constructor(key){

		this.key= key;
	}

	getByLatLng(lat,lng){

		//let url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng;
		//url += ('APPID=' + this.key);

		let url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng +"&APPID=edab11217c1f0b0231156a31edae6133"

		return rp(url).then(data=>{
			return JSON.parse(data);
		});
	}

}
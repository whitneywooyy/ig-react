var axios = require('axios');
var Variables = require('../../variables');

var helpers = {
	getFoursquare: function(placeName, geo){
		return axios.get("https://api.foursquare.com/v2/venues/search/?client_id=" + Variables.FoursquareId + "&client_secret=" + Variables.FoursquareSecret + "&limit=10&radius=100000&v=20150424&intent=browse&near=" + geo + "&query=" + placeName).then(function(res){
			console.log('res', res);
			return res.data.response.venues;
		});
	},
	getInstagram: function(foursquareId){
		return axios.get("https://api.instagram.com/v1/locations/search?foursquare_v2_id=" + foursquareId + "&client_id=" + Variables.InstagramId);
	}
};

module.exports = helpers;
var React = require('react');
var Router = require('react-router');
var Place = require('./Place');
var Variables = require('../../variables');

var SearchResults = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			username: "whitn_y",
			placeName: "tour-eiffel",
			geo: "paris",
			placeFSId: "1k24h2l3kj42",
			placeIGId: "87j5kh45",
			dateTaken: "Aug-21-2015"
		}
	},
	componentDidMount: function(){
		var geo = this.state.geo;
		var placeName = this.state.placeName;

		$.get("https://api.foursquare.com/v2/venues/search/?client_id=" + Variables.FoursquareId + "&client_secret=" + Variables.FoursquareSecret + "&limit=10&radius=100000&v=20150424&intent=browse&near=" + geo + "&query=" + placeName, function(res){
				console.log('results!', res);
			})

	},
	render: function(){
		var placeName = this.getParams().placeName;
		return (
			<div className="row">
				Search Results: {this.state.places} <br />
				A Place Name: {this.state.placeName} <br />
				A Place Foursquare ID: {this.state.placeFSId}
				<hr />
				<Place 
					username={this.state.username}
					placeName={this.state.placeName} 
					geo={this.state.geo}
					placeFSId={this.state.placeFSId}
					placeIGId={this.state.placeIGId} 
					dateTaken={this.state.dateTaken} 
				/>
			</div>
		)
	}
});

module.exports = SearchResults;
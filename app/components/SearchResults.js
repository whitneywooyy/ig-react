var React = require('react');
var Router = require('react-router');
var ResultsList = require('./ResultsList');
var Place = require('./Place');
var Variables = require('../../variables');

var SearchResults = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			searchResults: [],
			username: "whitn_y",
			placeName: "tour-eiffel",
			geo: "paris",
			placeFSId: "blank",
			placeIGId: "blanker",
			dateTaken: "Aug-21-2015"
		}
	},
	componentDidMount: function(){
		var geo = this.state.geo;
		var placeName = this.state.placeName;
		var searchResults = this.state.searchResults;

		$.get("https://api.foursquare.com/v2/venues/search/?client_id=" + Variables.FoursquareId + "&client_secret=" + Variables.FoursquareSecret + "&limit=10&radius=100000&v=20150424&intent=browse&near=" + geo + "&query=" + placeName, function(res){
				var returned = res.response.venues;
				console.log('returned', returned);
				for (var i = 0; i < returned.length; i++) {
					searchResults.push(returned[i]);
				}
				//this.forceUpdate(); // Causes error: "Warning: Any use of a keyed object should be wrapped in React.addons.createFragment(object) before being passed as a child."
				this.setState(searchResults); // Causes error: "Warning: Any use of a keyed object should be wrapped in React.addons.createFragment(object) before being passed as a child."
				console.log("YEST", this.state.searchResults);
			}
			.bind(this)
		);
	},
	render: function(){
		var placeName = this.getParams().placeName;
		// var resList = this.componentDidMount.resList;
		return (
			<div className="row">
				Search Results: {this.state.places} <br />
				A Place Name: {this.state.placeName} <br />
				A Place Foursquare ID: {this.state.placeFSId} <br />
				<hr />
				<ResultsList searchResults={this.state.searchResults} />
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
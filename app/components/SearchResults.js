var React = require('react');
var Router = require('react-router');
//var RouteHandler = require('react-router').RouteHandler;
var Place = require('./Place');

var SearchResults = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			username: "whitn_y",
			placeName: "tour-eiffel",
			placeFSId: "1k24h2l3kj42",
			placeIGId: "87j5kh45",
			dateTaken: "Aug-21-2015"
		}
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
					placeFSId={this.state.placeFSId}
					placeIGId={this.state.placeIGId} 
					dateTaken={this.state.dateTaken} 
				/>
			</div>
		)
	}
});

module.exports = SearchResults;
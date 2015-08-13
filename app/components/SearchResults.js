var React = require('react');
var Router = require('react-router');
var Place = require('./Place');

var SearchResults = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			places: ["Paris", "Utah", "NYC"]
		}
	},
	render: function(){
		var placeName = this.getParams().placeName;
		return (
			<div>
				Search Results: {this.state.places}
			</div>
		)
	}
});

module.exports = SearchResults;
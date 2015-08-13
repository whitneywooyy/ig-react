var React = require('react');
var Router = require('react-router');
var SearchResults = require('./SearchResults');

var Place = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			images: ["img1", "im2", "img3"]
		}
	},
	render: function(){
		var placeId = this.getParams().placeId;
		return (
			<div>(This is an individual) PLACE! <br />
			Place ID: {this.props.placeId} <br />
			Place Images: {this.state.images} <br />
			</div>
		)
	}
});

module.exports = Place;
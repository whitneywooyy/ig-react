var React = require('react');
var Router = require('react-router');

var Place = React.createClass({
	// propTypes: {
	// 	// username: React.PropTypes.string.isRequired,
	// 	placeName: React.PropTypes.string.isRequired,
	// 	// geo: React.PropTypes.string.isRequired,
	// 	placeFSId: React.PropTypes.string.isRequired,
	// 	// placeIGId: React.PropTypes.string.isRequired,
	// 	// dateTaken: React.PropTypes.string.isRequired
	// },
	render: function(){
		return (
			<div><hr />(This is an individual) PLACE! <br />
			Place Instagram ID: {this.props.placeIGId} <br />
			Place Name: {this.props.placeName}
			</div>
		)
	}
});

module.exports = Place;
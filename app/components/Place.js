var React = require('react');

var Place = React.createClass({
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
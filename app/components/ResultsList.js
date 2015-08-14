var React = require('react');

var ResultsList = React.createClass({
	// propTypes: {
	// 	username: React.PropTypes.string.isRequired,
	// 	placeName: React.PropTypes.string.isRequired,
	// 	geo: React.PropTypes.string.isRequired,
	// 	placeFSId: React.PropTypes.string.isRequired,
	// 	placeIGId: React.PropTypes.string.isRequired,
	// 	dateTaken: React.PropTypes.string.isRequired
	// },
	render: function(){
		return (
			<div><hr />This is the List of Results from a User's Search! <br />
			<strong>ResultsList:</strong> {this.props.searchResults} <br />
			</div>
		)
	}
});

module.exports = ResultsList;
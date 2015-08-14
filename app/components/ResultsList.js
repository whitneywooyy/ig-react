var React = require('react');
var Router = require('react-router');
var Place = require('./Place');

// var selectVenue = function(id){
// 	console.log('id', id);
// }

var ResultsList = React.createClass({
	propTypes: {
		searchResults: React.PropTypes.array.isRequired
	},
	// selectVenue: function(id){
	// 	console.log('212121id', id);
	// },
	render: function(){
		return (
			<div>
				<ul>
					{ this.props.searchResults.map(function(item, index){
						console.log('item', item);
						return <li className="list-group-item" key={index}>
						{item.id && <a href={"#/places/" + item.id}>{item.name}</a>}
						</li>
					}) }
				</ul>
				
			</div>
		);
	}
});

module.exports = ResultsList;

// onClick={selectVenue(item.id)}
// <Place searchResults={this.props.searchResults} />
var React = require('react');
var Router = require('react-router');
var ResultsList = require('./ResultsList');
var Place = require('./Place');
var Variables = require('../../variables');
var helpers = require('../utils/helpers');

var SearchResults = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return {
			searchResults: [],
			placeName: "",
			geo: ""
		}
	},
	init: function(){
		helpers.getFoursquare(this.getParams().placeName, this.getParams().geo).then(function(dataObj){
				this.setState({
					searchResults: dataObj
				});
		}.bind(this));
	},
	componentDidMount: function(){
		this.init();
	},
	componentWillReceiveProps: function(){
		this.init();
	},
	render: function(){
		var placeName = this.getParams().placeName;
		return (
			<div className="row">
				<ResultsList searchResults={this.state.searchResults} />
			</div>
		)
	}
});

module.exports = SearchResults;
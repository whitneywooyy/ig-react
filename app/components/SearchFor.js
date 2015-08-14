var React = require('react');
var Router = require('react-router');

var SearchFor = React.createClass({
	mixins: [Router.Navigation],
	handleSubmit: function(){
		var placeName = this.refs.placeName.getDOMNode().value;
		var geo = this.refs.geo.getDOMNode().value;
		this.refs.placeName.getDOMNode().value = '';
		this.refs.geo.getDOMNode().value = '';
		this.transitionTo('results', {placeName: placeName, geo: geo});
	},
	render: function(){
		return (
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref="placeName" placeholder="Place Name" />
						<input type="text" className="form-control" ref="geo" placeholder="Place Location" />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Places</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = SearchFor;
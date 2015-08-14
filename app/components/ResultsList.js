var React = require('react');

var ResultsList = React.createClass({
	render: function(){
		return (<div>
			<ul>
				{ this.props.searchResults.map(function(item, index){
					console.log('item', item);
					return <li className="list-group-item" key={index}>
					{item.id && <a href={item.url}>{item.name}</a>}
					</li>
				}) }
			</ul>
		</div>);
	}
});

module.exports = ResultsList;
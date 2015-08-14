var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var SearchResults = require('../components/SearchResults');
var Place = require('../components/Place');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
	<Route name="app" path="/" handler={Main}>
		<Route name="results" path="/results/:placeName+:geo" handler={SearchResults} />
		
		<DefaultRoute handler={Home} />
	</Route>
);

// Line 13: <Route name="place" path="/places/:placeId" handler={Place} />
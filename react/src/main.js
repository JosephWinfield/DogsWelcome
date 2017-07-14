import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';
import PlacesIndex from './components/PlacesIndex'
import NewPlace from './components/NewPlace'
import PlaceDetails from './components/PlaceDetails'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path='/' component={LandingPage}/>
			<Route exact path='/places' component={PlacesIndex}/>
			<Route exact path='/places/new' component={NewPlace}/>
			<Route exact path='/places/:id' component={PlaceDetails}/>
		</Switch>
	</Router>,
	document.querySelector('.app')
)

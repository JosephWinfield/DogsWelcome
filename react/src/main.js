import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';
import PlacesIndex from './components/PlacesIndex'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path='/' component={LandingPage}/>
			<Route path='/places' component={PlacesIndex}/>
		</Switch>
	</Router>,
	document.querySelector('.app')
)

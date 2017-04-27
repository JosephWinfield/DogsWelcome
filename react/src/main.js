import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';
import {Router, Route} from 'react-router';

ReactDOM.render(
	<Router>
		<Route path='/' component={LandingPage}/>
	</Router>,
	document.querySelector('.app')
)

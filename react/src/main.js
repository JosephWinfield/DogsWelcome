import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';

ReactDOM.render(<LandingPage/>, document.querySelector('.app'))

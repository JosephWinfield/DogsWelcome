import React from 'react';
import Navigation from './Navigation';
import Search from './Search'

export default class LandingPage extends React.Component {
	render() {
		return (
			<div className='root-body'>
				<Navigation isSignedIn={true}/>
				<div className='root-search'>
					<h2>
						Where are you headed?
					</h2>
					<Search />
				</div>
			</div>
		)
	}
}

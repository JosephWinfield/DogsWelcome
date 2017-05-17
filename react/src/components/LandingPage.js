import React from 'react';
import Navigation from './Navigation';
import Search from './Search'

export default class LandingPage extends React.Component {

	render() {
		return (
			<div className='root-body'>
				<div className='root-wrapper'>
					<Navigation isSignedIn={true}/>
					<div className='root-search'>
						<h2>
							Where are you headed?
						</h2>
						<Search history={this.props.history}/>
					</div>
				</div>
			</div>
		)
	}
}

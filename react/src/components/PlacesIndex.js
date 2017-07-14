import React from 'react';
import Places from './Places'
import Place from './Place';
import Navigation from './Navigation'
import Search from './Search'

export default class PlacesIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {places: []}
	}

	componentDidMount() {
		$.ajax({
			url: '/api/v1/places',
			contentType: 'application/json',
			dataType: 'json'
		}).done(data => {
			this.setState({places: data})
		});
	}

	render() {
		return (
			<div className='body'>
				<div className='wrapper'>
					<Navigation isSignedIn={true} klass={'headline'}/>
					<section className='search'>
						<Search history={this.props.history}/>
					</section>
					<section className='map'>
						<div id='map-container' >
							<div id='map-canvas' >
							</div>
						</div>
					</section>
					<Places placesList={this.state.places}/>
				</div>
			</div>
		)
	}
}

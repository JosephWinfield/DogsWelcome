import React from 'react';
import Navigation from './Navigation';

export default class PlaceDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		$.ajax({
			url: `/api/v1/${this.props.match.url}`,
			contentType: 'application/json',
			dataType: 'json'
		}).done(data => {
			this.setState({placeDetail: data})
		});
	}

	render() {
		if(!this.state.placeDetail) {
			return(
				<div> loading . . . </div>
			) }else {

				return(
					<div className='body'>
						<div className='wrapper'>
							<Navigation isSignedIn={true} klass={'headline'}/>
							<article className='place-details'>
								<div className='place-info'>
									<img className='place-image' src={this.state.placeDetail.image.url} alt={`image of ${this.state.placeDetail.name}`} />
									<h2>
										{this.state.placeDetail.name}
									</h2>
									<span className='show-address'>
										{this.state.placeDetail.full_address}
									</span>
									<br/>
									<span className='show-category'>
										{this.state.placeDetail.category}
									</span>
								</div>

								<p className='description'>
									{this.state.placeDetail.description}
								</p>
							</article>

							<div id="place-map-container">
							  <div id="place-map-canvas"></div>
							</div>
						</div>
					</div>
				)
			}
	}
}

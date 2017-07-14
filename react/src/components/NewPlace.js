import React from 'react';
import Navigation from './Navigation'

export default class NewPlace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			image: '',
			address: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			category: '',
			description: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'file' ? target.files[0] : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const reader = new FileReader();

		reader.addEventListener('load', () => {

			$.ajax({
				method: 'POST',
				url: '/api/v1/places',
				dataType: 'json',
				data: {
					name: this.state.name,
					image: reader.result,
					address: this.state.address,
					address2: this.state.address2,
					city: this.state.city,
					state: this.state.state,
					zip: this.state.zip,
					category: this.state.category,
					description: this.state.description
				},
			}).done(() => {
				this.props.history.push('/places')
			})
		})

		reader.readAsDataURL(this.state.image)
	}

	render() {
		return (
			<div className='body'>
				<div className='wrapper'>
					<Navigation isSignedIn={true} klass={'headline'}/>
					<div className='places-form'>
					<h2 className='title'> Add A new Dog Friendly Place </h2>
						<form className='new-place' id='new-place' onSubmit={this.handleSubmit}>
							<label htmlFor='place_name'>
								Name
							</label>
							<input
			          name='name'
			          type='string'
								className='input'
								placeholder='Name'
								id='place_name'
			          value={this.state.name}
			          onChange={this.handleChange} />
							<label htmlFor='place_image'>
								Image
							</label>
							<input
								name='image'
								type="file"
								className='input'
								placeholder='Business Image'
								id='place_image'
								onChange={this.handleChange} />
							<label htmlFor='place_address'>
								Address
							</label>
							<input
								name='address'
								type='string'
								className='input'
								placeholder='Address'
								id='place_address'
								value={this.state.address}
								onChange={this.handleChange} />
							<label htmlFor='place_address2'>
								Address2
							</label>
							<input
								name='address2'
								type='string'
								className='input'
								placeholder='Address 2'
								id='place_address2'
								value={this.state.address2}
								onChange={this.handleChange} />
							<label htmlFor='place_city'>
								City
							</label>
							<input
								name='city'
								type='string'
								className='input'
								placeholder='City'
								id='place_city'
								value={this.state.city}
								onChange={this.handleChange} />
							<label htmlFor='place_state'>
								State
							</label>
							<input
								name='state'
								type='string'
								className='input'
								placeholder='State'
								id='place_state'
								value={this.state.state}
								onChange={this.handleChange} />
							<label htmlFor='place_zip'>
								Zip Code
							</label>
							<input
								name='zip'
								type='string'
								className='input'
								placeholder='Zip Code'
								id='place_zip'
								value={this.state.zip}
								onChange={this.handleChange} />
							<label htmlFor='place_category'>
								Category
							</label>
							<input
								name='category'
								type='string'
								className='input'
								placeholder='Category'
								id='place_category'
								value={this.state.category}
								onChange={this.handleChange} />
							<label htmlFor='place_description'>
								Description
							</label>
							<input
								name='description'
								type='string'
								className='input'
								placeholder='Description'
								id='place_description'
								value={this.state.description}
								onChange={this.handleChange} />
							<input
								type='submit'
								className='submit'
								value='Add Place'/>
						</form>
					</div>
				</div>
			</div>
		)
	}



}

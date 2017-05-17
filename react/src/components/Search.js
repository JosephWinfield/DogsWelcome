import React from 'react'
import {Route, Redirect, Link} from 'react-router-dom'

export default class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.history.push('/places');
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='location'>
					Location
				</label>
				<input type='text' id='location'
				placeholder='city' value={this.state.value} onChange={this.handleChange} />
				<input type='submit' className='search-button' value=''/>
			</form>
		);
	}
}

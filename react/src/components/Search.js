import React from 'react'

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
		alert(`You searched for ${this.state.value}`);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='location'>
					Location
				<input type='text' value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}

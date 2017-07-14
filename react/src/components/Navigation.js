import React from 'react';
import {Link} from 'react-router-dom'

export default class Navigation extends React.Component {
	render() {
		let navList
		 if (this.props.isSignedIn){
			navList = [<li className="new-place">
				<Link to='/places/new'>add a place</Link>
			</li>,
			<li>
			<a href='#'>profile</a>
			</li>,
			<li>
				<a href='#'>sign out</a>
			</li>]
		}else {
			navList = [<li>
				<a href='#'>log in</a>
			</li>,
			<li>
				<a href='#'>sign up</a>
			</li>]
		}
		return (
			<header className='header'>
				<h1 className={this.props.klass}><Link to='/'>dogs welcome</Link></h1>
				<nav className='navigation'>
					<ul>
						{navList}
					</ul>

				</nav>

			</header>
		);
	}
}

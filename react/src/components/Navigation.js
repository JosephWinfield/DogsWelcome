import React from 'react';

export default class Navigation extends React.Component {
	render() {
		let navList
		 if (this.props.isSignedIn){
			navList = [<li className="new-place">
				<a href='#'>add a place</a>
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
			<header>
				<h1 className='root-headline'><a href='/'>dogs welcome</a></h1>
				<nav className='navigation'>
					<ul>
						{navList}
					</ul>

				</nav>

			</header>
		);
	}
}

import React from 'react';
import {Link} from 'react-router-dom';

export default ({place}) => {
	return(
		<li className='place-item'>
			<Link to={`/places/${place.id}`}>
				<img className='place-image' src={place.image.url} alt='place image '/>
				<h2>{place.name}</h2>
				<span className='address'>
					{place.full_address}
				</span>
				<br/>
				<span className='category'>
					{place.category}
				</span>
			</Link>
		</li>
	)
}



// "id": 1, "name": "Golden Gate Park", "full_address": "1199 9th Ave, San Francisco, CA, 94122", "category": "park", "image": { "url": "/assets/default-c060948152bf9240ef01bae3b82caa95f8fb0ca9314b5d078e2a2e6bd9db9457.jpg" }, "get_user_id": 1

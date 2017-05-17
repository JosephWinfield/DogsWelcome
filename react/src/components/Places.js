import React from 'react';
import Place from './Place'

export default ({placesList}) => {
	return(
		<ul className='places-list'>
			{placesList.map(place => {
				return <Place place={place} />
			})}
		</ul>
	)
}

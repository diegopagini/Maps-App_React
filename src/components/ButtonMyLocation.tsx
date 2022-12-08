/** @format */
import { useContext } from 'react';

import { MapContext, PlacesContext } from '../context';

/** @format */

export const ButtonMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext);
	const { userLocation } = useContext(PlacesContext);

	const onClick = () => {
		if (!isMapReady) throw new Error(`The map is not ready.`);
		if (!userLocation) throw new Error(`There is no user location.`);

		map?.flyTo({
			zoom: 14,
			center: userLocation,
		});
	};

	return (
		<button
			className='btn btn-primary'
			onClick={onClick}
			style={{
				position: 'fixed',
				right: '1.25rem',
				top: '1.25rem',
				zIndex: 100,
			}}>
			Mi Ubicaión
		</button>
	);
};

/** @format */
import '../styles.css';

import { Map } from 'mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';

import { PlacesContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext);
	const mapDiv = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		if (!isLoading) {
			new Map({
				container: mapDiv.current!,
				style: 'mapbox://styles/mapbox/streets-v12',
				center: userLocation,
				zoom: 14,
			});
		}
	}, [isLoading, userLocation]);

	if (isLoading) return <Loading />;

	return (
		<div
			ref={mapDiv}
			style={{
				height: '100vh',
				left: 0,
				position: 'fixed',
				top: 0,
				width: '100vw',
			}}>
			{userLocation?.join(',')}
		</div>
	);
};

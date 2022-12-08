/** @format */
import '../styles.css';

import { Map } from 'mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';

import { MapContext, PlacesContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext);
	const { setMap } = useContext(MapContext);
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapDiv.current!,
				style: 'mapbox://styles/mapbox/streets-v12',
				center: userLocation,
				zoom: 14,
			});

			setMap(map);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

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

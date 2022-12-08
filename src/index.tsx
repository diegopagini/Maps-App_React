/** @format */
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { MB_TOKEN } from './apis';
import { MapsApp } from './MapsApp';

mapboxgl.accessToken = MB_TOKEN;

// Browser without geolocation.
if (!navigator.geolocation) {
	alert(`Your browser doesn't have geolocation`);
	throw new Error(`Your browser doesn't have geolocation`);
}
// root.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// render.
root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);

/** @format */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

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

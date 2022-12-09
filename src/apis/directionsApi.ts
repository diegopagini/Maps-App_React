/** @format */
import axios from 'axios';

import { MB_TOKEN } from './token';

const directionsApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		access_token: MB_TOKEN,
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
	},
});
export default directionsApi;

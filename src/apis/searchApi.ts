/** @format */
import axios from 'axios';

import { MB_TOKEN } from './token';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		access_token: MB_TOKEN,
		language: 'es',
		limit: 5,
	},
});
export default searchApi;

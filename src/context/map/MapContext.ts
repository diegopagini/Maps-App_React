/** @format */
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from '!mapbox-gl';
import { createContext } from 'react';


interface MapContextProps {
	isMapReady: boolean;
	map?: Map;
	// Methods
	setMap: (map: Map) => void;
	getRouteBetweenPoins: (start: [number, number], end: [number, number]) => Promise<void>;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);

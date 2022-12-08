/** @format */
import { Map } from 'mapbox-gl';
import { createContext } from 'react';

interface MapContextProps {
	isMapReady: boolean;
	map?: Map;
	// Methods
	setMap: (map: Map) => void;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);

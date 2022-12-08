/** @format */
import { createContext } from 'react';

import { Feature } from '../../interfaces/places.interface';

export interface PlacesContextProps {
	isLoading: boolean;
	userLocation?: [number, number];
	searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);

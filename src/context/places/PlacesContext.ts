/** @format */
import { createContext } from 'react';

import { Feature } from '../../interfaces/places.interface';

export interface PlacesContextProps {
	isLoading: boolean;
	isLoadingPlaces: boolean;
	places: Feature[];
	userLocation?: [number, number];
	// Methods
	searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);

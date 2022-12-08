<!-- @format -->

# Maps App

### getUserLocation.ts

```typescript
export const getUserLocation = async (): Promise<[number, number]> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }: GeolocationPosition) => {
				resolve([coords.longitude, coords.latitude]);
			},
			(err: GeolocationPositionError) => {
				alert('Failed to get geolocation');
				console.error(err);
				reject();
			}
		);
	});
};
```

### PlacesContext.ts

```typescript
import { createContext } from 'react';

export interface PlacesContextProps {
	isLoading: boolean;
	userLocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>({
	isLoading: true,
	userLocation: undefined,
});
```

### PlacesProvider.tsx

```tsx
import { useEffect, useReducer } from 'react';

import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

	useEffect(() => {
		getUserLocation().then((lngLat: [number, number]) =>
			dispatch({ type: 'setUserLocation', payload: lngLat })
		);
	}, []);

	return <PlacesContext.Provider value={{ ...state }}>{children}</PlacesContext.Provider>;
};
```

### placesReducer.ts

```typescript
import { PlacesState } from './PlacesProvider';

type PlacesAction = { type: 'setUserLocation'; payload: [number, number] };

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
	switch (action.type) {
		case 'setUserLocation':
			return {
				...state,
				isLoading: false,
				userLocation: action.payload,
			};

		default:
			return state;
	}
};
```

### MapsApp.tsx

```tsx
import { PlacesProvider } from './context';

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<MapView />
		</PlacesProvider>
	);
};
```

### MapView.tsx

```tsx
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
```

### Manual Debounce

```tsx
import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
	// Manual debounce:
	const debounceRef = useRef<NodeJS.Timeout>();
	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			console.log(event.target.value);
		}, 350);
	};

	return (
		<div className='search-container'>
			<input
				type='text'
				className='form-control'
				placeholder='Buscar lugar...'
				onChange={onQueryChanged}
			/>
		</div>
	);
};
```

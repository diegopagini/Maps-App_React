/** @format */
import { PlacesProvider } from './context';
import { MapProvider } from './context/map/MapProvider';
import { HomeScreen } from './screens';

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<MapProvider>
				<HomeScreen />
			</MapProvider>
		</PlacesProvider>
	);
};

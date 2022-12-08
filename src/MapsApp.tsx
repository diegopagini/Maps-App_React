/** @format */
import { PlacesProvider } from './context';
import { HomeScreen } from './screens';

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<HomeScreen />
		</PlacesProvider>
	);
};

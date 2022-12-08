/** @format */
import { ButtonMyLocation, MapView, ReactLogo } from '../components';

export const HomeScreen = () => {
	return (
		<div>
			<MapView />
			<ButtonMyLocation />
			<ReactLogo />
		</div>
	);
};

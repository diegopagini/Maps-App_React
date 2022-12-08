/** @format */

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

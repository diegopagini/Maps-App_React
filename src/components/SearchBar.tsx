/** @format */
import { ChangeEvent, useContext, useRef } from 'react';

import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
	const { searchPlacesByQuery } = useContext(PlacesContext);

	// Manual debounce:
	const debounceRef = useRef<NodeJS.Timeout>();
	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			searchPlacesByQuery(event.target.value);
		}, 500);
	};

	return (
		<div className='search-container'>
			<input
				type='text'
				className='form-control'
				placeholder='Buscar lugar...'
				onChange={onQueryChanged}
			/>

			<SearchResults />
		</div>
	);
};

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetTopMoviesQuery } from '../api/topMoviesApi';
import { movieType } from '../types';

const Context = createContext<any>(null);

export const StateContext: React.FC<any> = ({ children }) => {
	const { data, isLoading, isError } = useGetTopMoviesQuery(null);
	const [dataToDisplay, setDataToDisplay] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		if (data !== undefined) {
			setDataToDisplay(data.items);
			setError(data.errorMessage);
		}
	}, [data]);

	const handleSearch = (input: string) => {
		if (input.length >= 3) {
			setDataToDisplay(
				dataToDisplay.filter((movie: movieType) => {
					if (
						movie?.title.toLowerCase().includes(input.toLowerCase())
					)
						return movie;
				})
			);
		} else {
			setDataToDisplay(data.items);
		}
	};

	return (
		<Context.Provider
			value={{
				isLoading,
				isError,
				dataToDisplay,
				handleSearch,
				error,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);

import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../redux/slices/movieSlice';
import { AuxProps, ContextType } from '../types';

const Context = createContext<ContextType>({
	loading: false,
	moviesToDisplay: [],
	error: null,
	handleSearch: () => {},
});

export const StateContext: React.FC<AuxProps> = ({ children }) => {
	const { loading, movies, error } = useSelector(getAllMovies);
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
	const [searchData, setSearchData] = useState(movies);

	useEffect(() => {
		setMoviesToDisplay(movies);
	}, [movies]);

	const handleSearch = (input: string) => {
		if (input.length >= 3) {
			const newArr = movies.filter((movie) => {
				if (
					movie.title.toLowerCase().includes(input.toLowerCase()) ||
					movie.crew.toLowerCase().includes(input.toLowerCase()) ||
					movie.year.toLowerCase().includes(input.toLowerCase())
				) {
					return movie;
				}
			});
			setMoviesToDisplay(newArr);
		}
		if (input.length < 3 && movies.length !== moviesToDisplay.length)
			setMoviesToDisplay(movies);
	};

	return (
		<Context.Provider
			value={{ loading, moviesToDisplay, error, handleSearch }}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);

import { useStateContext } from '../../context/AppContext';
import { movieType } from '../../types';
import MovieCard from '../MovieCard';
import './index.scss';

const MovieListing = () => {
	const { dataToDisplay, isLoading, isError, error } = useStateContext();

	if (isLoading) {
		return <h4>Loading...</h4>;
	}

	if (isError) {
		return <h4 className='movies-error'>{JSON.stringify(error)}</h4>;
	}

	return (
		<div className='movie-wrapper'>
			<div className='movie-list'>
				<h2>Movies</h2>
				<div className='movie-container'>
					{dataToDisplay &&
						dataToDisplay.map((movie: movieType) => (
							<span key={movie.id}>
								<MovieCard movie={movie} />
							</span>
						))}
				</div>
			</div>
		</div>
	);
};

export default MovieListing;

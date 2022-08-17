import { useStateContext } from '../../context/StateContext';
import MovieCard from '../MovieCard';
import './index.scss';

const MovieListing = () => {
	const { loading, moviesToDisplay, error } = useStateContext();

	if (loading) {
		return <h4>Loading...</h4>;
	}

	if (error) {
		return <h4 className='movies-error'>{JSON.stringify(error)}</h4>;
	}

	return (
		<div className='movie-wrapper'>
			<div className='movie-list'>
				<h2>Movies</h2>
				<div className='movie-container'>
					{moviesToDisplay &&
						moviesToDisplay.map((movie) => (
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

import { useEffect } from 'react';
import { MovieListing } from '../../components';
import './index.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../redux/slices/movieSlice';
import { AppDispatch } from '../../redux/store';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
	}, []);

	return (
		<div className='movie-content'>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	);
};

export default Home;

import { MovieListing } from '../../components';
import './index.scss';

const Home = () => {
	return (
		<div className='movie-content'>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	);
};

export default Home;

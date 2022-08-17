import { movieType } from '../../types';
import './index.scss';

const MovieCard: React.FC<{ movie: movieType }> = ({ movie }) => {
	const { title, imDbRating, image, year, rank, crew } = movie;
	return (
		<div className='card-item'>
			<div className='card-inner'>
				<div className='rank'>{rank}</div>
				<div className='card-left'>
					<img src={image} alt={title} />
				</div>
				<div className='card-right'>
					<div className='card-info'>
						<h2>{title}</h2>
						<p className='crew'>
							{year} - {crew}
						</p>
						<h4>{imDbRating}/10</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

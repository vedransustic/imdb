import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import User from '../../images/user.png';
import './index.scss';

const Header = () => {
	const { handleSearch } = useStateContext();
	return (
		<div className='header'>
			<Link to='/'>
				<div className='logo'>Movie App</div>
			</Link>
			<input
				type='text'
				placeholder='Search movie...'
				className='input-type'
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<div className='user-image'>
				<img src={User} alt='user' />
			</div>
		</div>
	);
};

export default Header;

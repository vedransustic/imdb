import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home, Error } from './Pages';
import Layout from './Layout';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

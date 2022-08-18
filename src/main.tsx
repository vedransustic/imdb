import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { movieApiSlice } from './api/topMoviesApi';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { StateContext } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApiProvider api={movieApiSlice}>
			<StateContext>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</StateContext>
		</ApiProvider>
	</React.StrictMode>
);

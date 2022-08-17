import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

export const store = configureStore({
	reducer: { movies: movieReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
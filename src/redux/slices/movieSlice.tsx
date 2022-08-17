import { createSlice } from '@reduxjs/toolkit';
import { stateType } from '../../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/movieApi';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`/${import.meta.env.VITE_API_KEY}`
			);
			return response.data.items.length > 0
				? response.data.items
				: rejectWithValue(response.data.errorMessage);
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);

const initialState: stateType = {
	loading: false,
	movies: [],
	error: null,
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		getAllMovies: (state) => {
			return {
				loading: state.loading,
				movies: state.movies,
				error: state.error,
			};
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending.toString()]: (state) => {
			return { ...state, loading: true };
		},
		[fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
			return { ...state, movies: payload, loading: false };
		},
		[fetchAsyncMovies.rejected.toString()]: (state, { payload }) => {
			return { ...state, loading: false, error: payload };
		},
	},
});

export const {} = moviesSlice.actions;

export const getAllMovies = (state: { movies: stateType }) => state.movies;

export default moviesSlice.reducer;

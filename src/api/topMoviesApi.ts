import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApiSlice = createApi({
	reducerPath: 'topMoviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
	tagTypes: ['Top250Movies'],
	endpoints: (builder) => ({
		getTopMovies: builder.query({
			query: () => `/Top250Movies/${import.meta.env.VITE_API_KEY}`,
			providesTags: ['Top250Movies'],
		}),
	}),
});

export const { useGetTopMoviesQuery } = movieApiSlice;

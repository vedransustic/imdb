import React from 'react';

export type stateType = {
	loading: boolean;
	movies: Array<movieType>;
	error: any;
};
export type movieType = {
	id: string;
	rank: string;
	title: string;
	fullTitle: string;
	year: string;
	image: string;
	crew: string;
	imDbRating: string;
	imDbRatingCount: string;
};

export type AuxProps = {
	children: React.ReactNode;
};

export type ContextType = {
	loading: boolean;
	moviesToDisplay: movieType[];
	error: any;
	handleSearch: (input: string) => void;
};

export interface IMovie {
	id: string;
	name: string;
	backdrop_path: string;
	overview: string;
	title: string;
	original_name: string;
	poster_path: string;
	media_type: string;
	popularity: number;
	vote_average: number;
}

export interface ISocial {
	id: number;
	link: string;
	icon: React.ReactNode | JSX.Element;
}

export interface INavLink {
	to: string;
	children: React.ReactNode;
}

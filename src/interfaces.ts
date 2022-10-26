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
	genres: [];
	release_date: string;
}

export interface ISocial {
	id: number;
	link: string;
	name: string;
	img?: string;
	icon?: React.ReactNode | JSX.Element;
}

export interface INavLink {
	to: string;
	children: React.ReactNode;
}

export interface IButton {
	name: string;
	className: string;
	link: boolean;
	Icon: React.ElementType;
	href: string;
}

export interface IInfo {
	name: string;
	img: string;
	role: string;
	contact: ISocial[];
}

export interface IVideos {
	name: string;
	id: string;
	key: string;
}

export interface ICasts {
	name: string;
	id: string;
	profile_path: string;
}

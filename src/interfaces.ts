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

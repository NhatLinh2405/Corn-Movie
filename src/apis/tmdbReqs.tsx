const API_KEY = "33f532ec9fe43cf7770a71c3828f5c83";

export const category: any = ["movie", "tv"];

const tmdbReqs = {
	// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
	getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	getNetflixOriginals: `/discover/all?api_key=${API_KEY}&with_networks=213`,
	getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	getMovieDetail: (id: string | undefined) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
	// getDetails: (id: string | undefined, cate: any) => {
	// 	if (cate === "movie") {
	// 		return `/movie/${id}?api_key=${API_KEY}&language=en-US`;
	// 	} else {
	// 		return `/tv/${id}?api_key=${API_KEY}&language=en-US`;
	// 	}
	// },
};

export default tmdbReqs;

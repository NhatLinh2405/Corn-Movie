const API_KEY = "33f532ec9fe43cf7770a71c3828f5c83";

export const category: string[] = ["movie", "tv"];

const tmdbReqs = {
	getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	getTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
	getTrendingTvSeries: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,

	getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

	getDetail: (id: string, category: string) => `/${category}/${id}?api_key=${API_KEY}&language=en-US`,
};

export default tmdbReqs;

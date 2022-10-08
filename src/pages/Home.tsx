import Banner from "../components/Home/Banner";
import MovieList from "../components/Home/MovieList";
import tmdbReqs from "./../apis/tmdbReqs";

export default function Home() {
	return (
		<div className="mb-10">
			<Banner />
			<MovieList title="Netflix Originals" fetchUrl={tmdbReqs.fetchNetflixOriginals} isLargeRow />
			<MovieList title="Top Rated" fetchUrl={tmdbReqs.fetchTrending} />
			<MovieList title="Trending Now" fetchUrl={tmdbReqs.fetchTopRated} />
			<MovieList title="Action Movies" fetchUrl={tmdbReqs.fetchActionMovies} />
			<MovieList title="Comedy Movies" fetchUrl={tmdbReqs.fetchComedyMovies} />
			<MovieList title="Horror Movies" fetchUrl={tmdbReqs.fetchHorrorMovies} />
			<MovieList title="Romance Movies" fetchUrl={tmdbReqs.fetchRomanceMovies} />
			<MovieList title="Documentaries" fetchUrl={tmdbReqs.fetchDocumentaries} />
		</div>
	);
}

import Banner from "../components/Home/Banner";
import MovieList from "../components/Home/MovieList";
import tmdbReqs from "./../apis/tmdbReqs";

export default function Home() {
	return (
		<div className="mb-10">
			<Banner />
			<MovieList title="Netflix Originals" isTv getUrl={tmdbReqs.getNetflixOriginals} isLargeRow />
			<MovieList title="Top Rated" getUrl={tmdbReqs.getTrending} />
			<MovieList title="Trending Now" getUrl={tmdbReqs.getTopRated} />
			<MovieList title="Action Movies" getUrl={tmdbReqs.getActionMovies} />
			<MovieList title="Comedy Movies" getUrl={tmdbReqs.getComedyMovies} />
			<MovieList title="Horror Movies" getUrl={tmdbReqs.getHorrorMovies} />
			<MovieList title="Romance Movies" getUrl={tmdbReqs.getRomanceMovies} />
			<MovieList title="Documentaries" getUrl={tmdbReqs.getDocumentaries} />
		</div>
	);
}

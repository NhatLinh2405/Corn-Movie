import ReactPaginate from "react-paginate";
import tmdbReqs from "../apis/tmdbReqs";
import { IMovie } from "../interfaces";
import axiosClient from "../apis/axiosClient";
import { useEffect, useState } from "react";
import backgroundMovie from "../assets/bgContact.jpg";
import { Link } from "react-router-dom";

export default function TvSeries() {
	const [movies, setMovies] = useState<[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);

	useEffect(() => {
		const getData = async () => {
			const res = await axiosClient.get(tmdbReqs.getTrendingTvSeries, {
				params: {
					page: page,
				},
			});
			setMovies(res.data.results);
			setTotalPage(res.data.total_pages);
		};
		getData();
	}, [page]);

	const handlePageClick = ({ selected }: { selected: number }): void => {
		setPage(selected + 1);
	};

	const offset = page * 10;
	const pageCount = Math.ceil(totalPage / 10);

	const currentPageData = movies.slice(0, offset + 20).map((movie: IMovie) => (
		<Link to={`/tv/${movie.id}`}>
			<div
				key={movie.id}
				className={`relative cursor-pointer h-80 w-full `}
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
					objectFit: "contain",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					boxShadow: "inset 0 -50px 0 0 rgba(0, 0, 0, 0.5)",
				}}
			>
				<div className="w-[50px] h-[50px] rounded-full flex-center shadow-pop bg-primary absolute left-3 top-2">
					<span className="font-bold text-white">{movie.vote_average.toFixed(1)}</span>
				</div>
				<div className="absolute inset-x-0 space-y-2 text-center text-white bottom-3">
					<p className="font-medium">{movie.name || movie.title || movie.original_name}</p>
				</div>
			</div>
		</Link>
	));

	return (
		<>
			<img src={backgroundMovie} className="h-[70vh] w-full object-cover bg-[rgba(0,0,0,0.4)]" alt="" />
			<div className="px-10 py-5">
				<div className="grid grid-cols-5 gap-3">{currentPageData}</div>
				<div className="p-5 text-white flex-center">
					<ReactPaginate
						breakLabel="..."
						className="flex space-x-5"
						activeLinkClassName="border-2 border-white py-2 px-4 rounded-lg"
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel="< previous"
					/>
				</div>
			</div>
		</>
	);
}

import ReactPaginate from "react-paginate";
import tmdbReqs from "../apis/tmdbReqs";
import { IMovie } from "../interfaces";
import { axiosClient, apiConfig } from "../apis/axiosClient";
import { useEffect, useState } from "react";
import backgroundMovie from "../assets/bgContact.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Movies() {
	const [movies, setMovies] = useState<[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);

	// search by keywords
	// const [keyword, setKeyword] = useState<string>("");
	// const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setKeyword(e.target.value);
	// };
	// console.log(keyword);

	useEffect(() => {
		const getData = async () => {
			const res = await axiosClient.get(tmdbReqs.getTrendingMovie, {
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
		window.scrollTo(0, 435);
	};

	const offset = page * 10;
	const pageCount = Math.ceil(totalPage / 10);

	const currentPageData = movies.slice(0, offset + 20).map((movie: IMovie) => (
		<Link key={movie.id} className="overflow-hidden" to={`/movie/${movie.id}`}>
			<div
				className={`relative hover:scale-105 md:hover:scale-100 cursor-pointer h-96 w-full`}
				style={{
					backgroundImage: `url(${apiConfig.imgURL}/${movie.backdrop_path})`,
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
			<img
				src={backgroundMovie}
				className="h-[70vh] w-full object-cover bg-[rgba(0,0,0,0.4)] brightness-75"
				alt=""
			/>
			<form
				action=""
				className="absolute flex-col w-1/2 space-y-3 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex-center"
			>
				<input
					type="text"
					readOnly
					className="w-full h-12 px-4 bg-white rounded-lg shadow-pop focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
					placeholder="Search for a movie, tv series, person..."
					onFocus={() => toast.error("This feature is not available yet")}
					// onChange={() => toast.error("This didn't work.")}
				/>
			</form>
			<div className="p-10">
				<div className="grid grid-cols-5 gap-5 mb-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					{currentPageData}
				</div>
				<div className="p-5 text-white flex-center">
					<ReactPaginate
						breakLabel="..."
						className="flex space-x-5 sm:space-x-4"
						activeLinkClassName="border-2 border-white py-2 sm:px-2 px-4 rounded-lg"
						nextLabel=">"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel="<"
					/>
				</div>
			</div>
		</>
	);
}

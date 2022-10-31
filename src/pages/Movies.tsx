import ReactPaginate from "react-paginate";
import tmdbReqs from "../apis/tmdbReqs";
import { IMovie } from "../interfaces";
import { axiosClient, apiConfig } from "../apis/axiosClient";
import { useEffect, useState } from "react";
import backgroundMovie from "../assets/bgContact.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import LazyLoad from "../components/LazyLoad";

export default function Movies() {
	const [movies, setMovies] = useState<[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);
	const [keyword, setKeyword] = useState<string>("");
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (keyword === "") {
			toast.error("Please enter a keyword");
		} else {
			const data = async () => {
				const response = await axiosClient.get(tmdbReqs.searchMovie + keyword);
				if (response.data.results.length === 0) {
					toast.error("No results found");
				} else {
					setMovies(response.data.results);
					setTotalPage(response.data.total_pages);
				}
			};
			data();
		}
	};

	useEffect(() => {
		if (keyword === "") {
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
			page === 1 && window.scrollTo(0, 0);
		}
	}, [page, keyword]);

	const handlePageClick = ({ selected }: { selected: number }): void => {
		setPage(selected + 1);
		window.scrollTo(0, 435);
	};

	const offset = page * 10;
	const pageCount = Math.ceil(totalPage / 10);

	const currentPageData = movies.slice(0, offset + 20).map((movie: IMovie) => (
		<Link key={movie.id} className="overflow-hidden" to={`/movie/${movie.id}`}>
			<div className={`relative hover:scale-105 md:hover:scale-100 cursor-pointer h-96 w-full`}>
				<LazyLoad
					className={`hover:scale-105 object-cover h-96 w-full`}
					alt=""
					src={`${apiConfig.imgURL}/${movie.backdrop_path}`}
				/>
				<div className="w-[50px] h-[50px] rounded-full flex-center shadow-pop bg-primary absolute left-3 top-2">
					<span className="font-bold text-white">{movie.vote_average.toFixed(1)}</span>
				</div>
				<div className="absolute inset-x-0 bottom-0 h-[15%] flex-center space-y-2 text-center text-white bg-bgCard">
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
			<form action="" className="flex-col w-full mt-5 flex-center" onSubmit={handleSubmit}>
				<input
					type="text"
					className="w-1/3 px-4 bg-white rounded-lg lg:w-1/2 md:w-2/3 sm:w-5/6 h-14 shadow-pop focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
					placeholder="Search for tv series..."
					onChange={handleSearchChange}
					value={keyword}
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

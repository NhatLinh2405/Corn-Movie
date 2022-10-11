import ReactPaginate from "react-paginate";
import tmdbReqs from "../apis/tmdbReqs";
import { IMovie } from "../interface";
import axiosClient from "../apis/axiosClient";
import { useEffect, useState } from "react";

export default function Movies() {
	const [movies, setMovies] = useState<[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);

	useEffect(() => {
		const getData = async () => {
			const res = await axiosClient.get(tmdbReqs.getTrending, {
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

	const curretPageData = movies.slice(0, offset + 20).map((movie: IMovie) => (
		<div className="" key={movie.id}>
			<img
				className="object-cover cursor-pointer w-72 h-96 hover:scale-105"
				src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
				alt=""
			/>
		</div>
	));

	return (
		<div className="grid grid-cols-5 bg-white">
			{curretPageData}
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
			/>
		</div>
	);
}

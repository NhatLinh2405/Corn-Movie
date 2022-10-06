import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillPlayCircle } from "react-icons/ai";

import Button from "../Button";
import { useState, useEffect } from "react";
import axios from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";

interface IMovie {
	movie: {
		name: string;
		backdrop_path: string;
		overview: string;
		title: string;
		original_name: string;
	}[];
}

export default function Banner() {
	const [movie, setMovie] = useState<IMovie[]>([]);
	useEffect(() => {
		const getMovie = async () => {
			const res = await axios.get(tmdbReqs.fetchNetflixOriginals);
			setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
			console.log(res.data.results);
		};
		getMovie();
	}, []);

	const URL_IMG = movie && `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
	return (
		<div
			className={`relative w-full h-[700px]`}
			style={{
				backgroundImage: `url(${URL_IMG})`,
				objectFit: "contain",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="px-24 pt-56 tracking-wide h-60">
				<h1 className="pb-3 w-[46rem] text-6xl font-extrabold text-white drop-shadow-2xl">
					{movie.name || movie.title || movie.original_name}
				</h1>
				<div className="py-3 ">
					<h2 className="text-2xl text-white line-clamp-3 w-[44rem]">{movie.overview}</h2>
				</div>

				<div className="flex gap-4 pt-4">
					<Button
						name="Watch Now"
						Icon={AiFillPlayCircle}
						link
						href={`/a`}
						className="bg-white hover:border-2 hover:border-white hover:bg-red-600 hover:text-white"
					/>
					<Button
						name="More Info"
						Icon={RiErrorWarningLine}
						link
						href={`/b`}
						className="bg-transparent border-2 border-white hover:bg-red-600 hover:text-white"
					/>
				</div>

				{/* <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500" /> */}
			</div>
		</div>
	);
}

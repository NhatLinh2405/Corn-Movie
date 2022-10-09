import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import Button from "../Button";
import axiosClient from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";

import { IMovie } from "../../interface";

export default function Banner() {
	const [movie, setMovie] = useState<IMovie>();
	useEffect(() => {
		const getMovie = async () => {
			const res = await axiosClient.get(tmdbReqs.getNetflixOriginals);
			setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
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
			<div className="flex-col h-full px-24 tracking-wide flex-center-x">
				{movie && (
					<>
						<h1 className="pb-3 w-[46rem] text-6xl font-extrabold text-white drop-shadow-2xl">
							{movie.name || movie.title || movie.original_name}
						</h1>
						<div className="py-3 ">
							<h2 className="text-2xl text-white line-clamp-3 w-[44rem]">{movie.overview}</h2>
						</div>
					</>
				)}

				<div className="flex gap-4 pt-4">
					<Button
						name="Watch Now"
						Icon={AiFillPlayCircle}
						link
						href={`/a`}
						className="bg-white hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
					/>
					<Button
						name="More Info"
						Icon={RiErrorWarningLine}
						link
						href={`/movie/${movie?.id}`}
						className="text-white bg-transparent border-2 border-white hover:bg-red-600 hover:text-white"
					/>
				</div>
			</div>
		</div>
	);
}

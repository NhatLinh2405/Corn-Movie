import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { axiosClient, apiConfig } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import Button from "../Button";
import { IMovie } from "../../interfaces";

export default function Banner() {
	const [movie, setMovie] = useState<IMovie>();

	useEffect(() => {
		const getMovie = async () => {
			const res = await axiosClient.get(tmdbReqs.getTrending);
			setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
		};
		getMovie();
	}, []);

	const banner_URL = movie && `${apiConfig.imgURL}/${movie.backdrop_path}`;
	return (
		<div
			className={`relative w-full h-[700px]`}
			style={{
				backgroundImage: `url(${banner_URL})`,
				objectFit: "contain",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="flex-col h-full px-24 tracking-wide lg:px-10 sm:px-3 flex-center-x">
				{movie && (
					<>
						<h1 className="pb-3 text-6xl font-extrabold text-white md:w-full drop-shadow-2xl lg:text-4xl sm:text-3xl">
							{movie.name || movie.title || movie.original_name}
						</h1>
						<div className="py-3">
							<h2 className="text-2xl text-white line-clamp-3 w-[44rem] lg:text-lg sm:text-base md:w-full">
								{movie.overview}
							</h2>
						</div>
						<div className="flex gap-4 pt-4">
							<Button
								name="Watch Now"
								Icon={AiFillPlayCircle}
								link
								href={`/a`}
								className="bg-white hover:border-2 hover:border-white hover:bg-transparent hover:text-white sm:text-sm"
							/>
							<Button
								name="More Info"
								Icon={RiErrorWarningLine}
								link
								href={movie.media_type === "tv" ? `/tv/${movie.id}` : `/movie/${movie.id}`}
								className="text-white bg-transparent border-2 border-white hover:bg-red-600 hover:text-white sm:text-sm"
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

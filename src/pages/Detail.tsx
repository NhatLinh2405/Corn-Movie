import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "./../apis/axiosClient";
import tmdbReqs from "./../apis/tmdbReqs";
import { IMovie } from "../interfaces";

export default function Detail() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [movie, setMovie] = useState<IMovie>();
	useEffect(() => {
		const getDetail = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getDetail(id, category));
				setMovie(res.data);
			}
		};
		getDetail();
	}, [id, category]);

	const URL_IMG = movie && `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
	return (
		<div className="text-white">
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
								<h2 className="text-2xl text-white line-clamp-3 w-[44rem]">
									{movie.overview}
								</h2>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

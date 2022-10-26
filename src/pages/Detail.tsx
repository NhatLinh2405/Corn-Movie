import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "./../apis/axiosClient";
import tmdbReqs from "./../apis/tmdbReqs";
import { IMovie } from "../interfaces";
import { Cast, Video } from "../components/Detail";

export default function Detail() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [movie, setMovie] = useState<IMovie>();

	useEffect(() => {
		const getDetail = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getDetail(id, category));
				setMovie(res.data);
				window.scrollTo(0, 0);
			}
		};
		getDetail();
	}, [id, category]);

	const URL_IMG = movie && `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
	const URL = movie && `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
	return (
		<>
			{movie && (
				<>
					<div className="w-full text-white ">
						<div
							className={`relative h-[600px]`}
							style={{
								backgroundImage: `url(${URL_IMG})`,
								objectFit: "contain",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
							}}
						></div>
						<div className="flex justify-between space-x-10 px-14 py-14">
							<div className="">
								<img
									className="border-2 border-r-white border-l-red-400 w-[400] h-[550px] object-cover rounded-2xl shadow-pop"
									src={URL}
									alt=""
								/>
							</div>
							<div className="w-3/4">
								<h1 className="text-6xl font-extrabold shadow-xl">
									{movie.name || movie.title || movie.original_name}
								</h1>
								<div className="flex my-5 space-x-8">
									{movie.genres.map((genre: { name: string }) => (
										<span
											key={genre.name}
											className="px-5 py-2 text-xl font-bold text-center bg-transparent border-2 border-white cursor-pointer hover:scale-105 rounded-2xl "
										>
											{genre.name}
										</span>
									))}
								</div>
								<h5 className="my-10 text-lg text-white ">
									Release Date:
									<span className="ml-4 font-normal">{movie.release_date}</span>
								</h5>
								<p className="my-10 text-lg text-white ">{movie.overview}</p>
								<Cast />
							</div>
						</div>
						<Video />
					</div>
				</>
			)}
		</>
	);
}

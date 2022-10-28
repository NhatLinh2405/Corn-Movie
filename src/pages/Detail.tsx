import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient, apiConfig } from "./../apis/axiosClient";
import { IMovie } from "../interfaces";
import tmdbReqs from "./../apis/tmdbReqs";
import Homepage from "../assets/video/homepage.gif";
import { Cast, Video, Similar, Review, Sessions } from "../components/Detail";

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

	const banner_IMG = movie && `${apiConfig.imgURL}/${movie.backdrop_path}`;
	const URL = movie && `${apiConfig.imgURL}/${movie.poster_path}`;

	return (
		<>
			{movie && (
				<div className="w-full text-white ">
					<div
						className={`relative h-[600px]`}
						style={{
							backgroundImage: `url(${banner_IMG})`,
							objectFit: "contain",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
						}}
					/>
					<div className="py-10 px-14">
						<div className="flex justify-between space-x-10 ">
							<img
								className="hover:scale-105 w-[400] h-[550px] object-cover rounded-2xl shadow-pop"
								src={URL}
								alt=""
							/>
							<div className="w-3/4">
								<h1 className="mb-16 text-6xl font-extrabold shadow-xl">
									{movie.name || movie.title || movie.original_name}
								</h1>
								<div className="flex my-5 space-x-8">
									{movie.genres.map((genre: { name: string }) => (
										<a
											key={genre.name}
											target="_blank"
											rel="noreferrer"
											href={`https://en.wikipedia.org/wiki/${genre.name}`}
										>
											<span className="px-5 py-2 text-xl font-bold text-center bg-transparent border-2 border-white cursor-pointer hover:scale-105 rounded-2xl ">
												{genre.name}
											</span>
										</a>
									))}
								</div>
								<h5 className="my-10 text-lg text-white flex-center-y">
									Home Page:
									<a
										className="ml-4 font-normal"
										href={movie.homepage}
										target="_blank"
										rel="noreferrer"
									>
										<img src={Homepage} alt="" className="w-20 cursor-pointer" />
									</a>
								</h5>
								<h5 className="my-10 text-lg text-white ">
									IMDB Score
									<span className="ml-4 font-normal">{movie.vote_average.toFixed(1)}</span>
								</h5>
								{category === "movie" ? (
									<h5 className="my-10 text-lg text-white ">
										Release Date:
										<span className="ml-4 font-normal">
											{movie.release_date.slice(0, 10).split("-").reverse().join("-")}
										</span>
									</h5>
								) : (
									<>
										<div>
											<h5 className="my-10 text-lg">
												First Air Date:
												<span className="ml-4 font-normal">
													{movie.first_air_date
														.slice(0, 10)
														.split("-")
														.reverse()
														.join("-")}
												</span>
											</h5>
											<h5 className="my-10 text-lg">
												Last Air Date:
												<span className="ml-4 font-normal">
													{movie.last_air_date
														.slice(0, 10)
														.split("-")
														.reverse()
														.join("-")}
												</span>
											</h5>
										</div>
										<h5 className="my-10 text-lg">
											Episodes:
											<span className="ml-4 font-normal">
												{movie.number_of_episodes}
											</span>
										</h5>
										<Sessions movie={movie} />
									</>
								)}
								<p className="my-10 text-lg text-white ">{movie.overview}</p>
								<Cast />
							</div>
						</div>
						<Review />
						<Video />
						<Similar />
					</div>
				</div>
			)}
		</>
	);
}

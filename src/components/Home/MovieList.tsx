import { useEffect, useState } from "react";
import axiosClient from "../../apis/axiosClient";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import { IMovie } from "../../interface";
import { Link } from "react-router-dom";

interface IProps {
	title: string;
	getUrl: string;
	isLargeRow?: boolean;
}

export default function MovieList({ title, getUrl, isLargeRow }: IProps) {
	const [movies, setMovies] = useState<[]>([]);

	const base_url = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		const getData = async () => {
			const res = await axiosClient.get(getUrl);
			setMovies(res.data.results);
		};
		getData();
	}, [getUrl]);

	return (
		<div className="ml-10 text-white">
			<h2 className="my-5">{title}</h2>
			<div className="flex">
				<Swiper
					slidesPerView={isLargeRow ? 5 : 6}
					spaceBetween={10}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, FreeMode]}
					className="mySwiper"
				>
					{movies &&
						movies.map(
							(movie: IMovie) =>
								((isLargeRow && movie.poster_path) ||
									(!isLargeRow && movie.backdrop_path)) && (
									<SwiperSlide key={movie.id} style={{ width: "auto", height: "auto" }}>
										<>
											<Link to={`/movie/${movie.id}`}>
												<img
													className={`${
														isLargeRow
															? "w-72 h-96 object-cover"
															: "w-72 h-80 object-cover"
													}  hover:scale-105 cursor-pointer`}
													src={`${base_url}${
														isLargeRow ? movie.poster_path : movie.poster_path
													}`}
													alt={movie.name}
												/>
											</Link>
										</>
									</SwiperSlide>
								)
						)}
				</Swiper>
			</div>
		</div>
	);
}

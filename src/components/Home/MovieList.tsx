import { useEffect, useState } from "react";
import { axiosClient, apiConfig } from "../../apis/axiosClient";

import { IMovie } from "../../interfaces";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

interface IProps {
	title: string;
	getUrl: string;
	isTv?: boolean;
	isLargeRow?: boolean;
}

export default function MovieList({ title, getUrl, isLargeRow, isTv }: IProps) {
	const [movies, setMovies] = useState<[]>([]);

	useEffect(() => {
		const getData = async () => {
			const res = await axiosClient.get(getUrl);
			setMovies(res.data.results);
		};
		getData();
	}, [getUrl]);

	return (
		<div className="ml-10 text-white md:ml-2">
			<h2 className="mt-12 mb-5">{title}</h2>
			<div className="flex">
				<Swiper
					breakpoints={{
						320: {
							slidesPerView: 2,
						},
						639: {
							width: 639,
							slidesPerView: 3,
						},
						1023: {
							width: 1023,
							slidesPerView: 5,
						},
						1279: {
							width: 1279,
							slidesPerView: isLargeRow ? 5 : 6,
						},
					}}
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
									<SwiperSlide
										key={movie.id}
										style={{ width: "auto", height: "auto", overflow: "hidden" }}
									>
										<>
											<Link
												to={
													isTv || movie.media_type === "tv"
														? `/tv/${movie.id}`
														: `/movie/${movie.id}`
												}
											>
												<img
													className={`${
														isLargeRow ? "w-72 h-96 " : "w-72 h-80 "
													}  hover:scale-105 cursor-pointer object-cover`}
													src={`${apiConfig.imgURL}${movie.poster_path}`}
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

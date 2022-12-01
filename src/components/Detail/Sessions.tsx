import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiConfig } from "../../apis/axiosClient";
import { IMovie } from "../../interfaces";
import { ISeason } from "./../../interfaces";

interface IProps {
	movie: IMovie;
}

export default function Sessions({ movie }: IProps) {
	return (
		<div>
			{movie.seasons.length < 5 ? (
				<>
					<div className="grid grid-cols-4 gap-5 md:grid-cols-2">
						{movie.seasons?.map((s: ISeason) => (
							<div key={s.id} className="overflow-hidden">
								<div
									className={`relative hover:scale-105 md:hover:scale-100 cursor-pointer h-96 w-full`}
									style={{
										backgroundImage: `url(${apiConfig.imgURL}/${s.poster_path})`,
										objectFit: "contain",
										backgroundSize: "cover",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										boxShadow: "inset 0 50px 0 0 rgba(0, 0, 0, 0.5)",
									}}
								>
									<div className="absolute inset-x-0 space-y-2 text-center text-white top-3">
										<span className="font-medium">
											{s.name} - {s.episode_count} episodes
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<div className="pr-10 overflow-hidden xl:pr-0">
					<Swiper
						breakpoints={{
							639: {
								width: 639,
								slidesPerView: 3,
							},
							1023: {
								width: 1023,
								slidesPerView: 4,
							},
							1279: {
								width: 1279,
								slidesPerView: 5,
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
						className="overflow-hidden mySwiper"
					>
						{movie.seasons?.map((s: ISeason) => (
							<SwiperSlide
								key={s.id}
								style={{
									width: "auto",
									height: "auto",
									overflow: "hidden",
								}}
							>
								<div key={s.id} className="overflow-hidden">
									<div
										className={`relative hover:scale-105 md:hover:scale-100 cursor-pointer h-96 w-full`}
										style={{
											backgroundImage: `url(${apiConfig.imgURL}/${s.poster_path})`,
											objectFit: "contain",
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
											boxShadow: "inset 0 50px 0 0 rgba(0, 0, 0, 0.5)",
										}}
									>
										<div className="absolute inset-x-0 space-y-2 text-center text-white top-3">
											<span className="font-medium">
												{s.name} - {s.episode_count} episodes
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
}

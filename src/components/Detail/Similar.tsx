import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient, apiConfig } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import { IMovie } from "../../interfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper";

export default function Similar() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [similar, setSimilar] = useState<[]>();

	useEffect(() => {
		const getDetail = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getSimilar(id, category));
				setSimilar(res.data.results);
			}
		};
		getDetail();
	}, [id, category]);

	return (
		<div className="mb-10">
			<h1 className="my-5">Similar</h1>
			<Swiper
				slidesPerView={6}
				spaceBetween={20}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, FreeMode]}
				className="mySwiper"
			>
				{similar &&
					similar.map((item: IMovie) => (
						<SwiperSlide
							key={item.id}
							style={{ width: "auto", height: "auto", overflow: "hidden" }}
						>
							<Link to={category === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`}>
								<div
									className={`relative hover:scale-105 cursor-pointer h-80 w-full`}
									style={{
										backgroundImage: `url(${apiConfig.imgURL}/${item.poster_path})`,
										objectFit: "contain",
										backgroundSize: "cover",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
									}}
								>
									<div className="w-[50px] h-[50px] rounded-full flex-center shadow-pop bg-primary absolute left-3 top-2">
										<span className="font-bold text-white">
											{item.vote_average.toFixed(1)}
										</span>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

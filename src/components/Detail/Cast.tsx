import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConfig, axiosClient } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import { ICasts } from "../../interfaces";
import LazyLoad from "../LazyLoad";

export default function Cast() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [cast, setCast] = useState<[]>();

	useEffect(() => {
		const getCast = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getCredit(id, category));
				setCast(res.data.cast);
			}
		};
		getCast();
	}, [id, category]);

	return (
		<div className="grid grid-cols-5 gap-5 pr-10 overflow-hidden xl:pr-0 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
			{cast &&
				cast.slice(0, 10).map((actor: ICasts) => (
					<a
						key={actor.id}
						href={`https://www.themoviedb.org/person/${actor.id}`}
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden text-center "
					>
						<LazyLoad
							src={`${apiConfig.imgURL}/${actor.profile_path}`}
							alt=""
							className="object-cover w-full hover:scale-105 md:hover:scale-100 rounded-2xl"
						/>
						<h1 className="my-4 text-xl font-bold ">{actor.name}</h1>
					</a>
				))}
		</div>
	);
}

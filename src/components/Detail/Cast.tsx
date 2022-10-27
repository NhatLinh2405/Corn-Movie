import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient, apiConfig } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import { ICasts } from "../../interfaces";

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
		<div className="grid grid-cols-5 gap-5 overflow-hidden">
			{cast &&
				cast.slice(0, 10).map((actor: ICasts) => (
					<a
						key={actor.id}
						href={`https://www.themoviedb.org/person/${actor.id}`}
						target="_blank"
						rel="noreferrer"
						className="w-auto h-auto overflow-hidden"
					>
						<img
							className="w-full hover:scale-105 h-60 rounded-2xl"
							src={`${apiConfig.imgURL}/${actor.profile_path}`}
							alt=""
						/>
						<h1 className="my-4 text-xl font-bold text-center">{actor.name}</h1>
					</a>
				))}
		</div>
	);
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../apis/axiosClient";
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
					<div key={actor.id} className="w-auto h-auto overflow-hidden">
						<img
							className="w-full hover:scale-105 h-60 rounded-2xl"
							src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
							alt=""
						/>
						<h1 className="my-4 text-xl font-bold text-center">{actor.name}</h1>
					</div>
				))}
		</div>
	);
}

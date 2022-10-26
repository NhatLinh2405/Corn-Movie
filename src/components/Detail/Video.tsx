import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import { IVideos } from "../../interfaces";

export default function Video() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [videos, setVideos] = useState<[]>();
	console.log(videos);

	useEffect(() => {
		const getDetail = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getVideos(id, category));
				setVideos(res.data.results);
			}
		};
		getDetail();
	}, [id, category]);

	return (
		<div className="grid content-center grid-cols-2 gap-8 mb-10 px-14">
			{videos &&
				videos.slice(0, 8).map((video: IVideos) => (
					<div>
						<p className="mb-5 text-xl font-medium mt-14">{video.name}</p>
						<iframe
							key={video.key}
							className="w-full h-[700px]"
							src={`https://www.youtube.com/embed/${video.key}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				))}
		</div>
	);
}

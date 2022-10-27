import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient, apiConfig } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import { IVideos } from "../../interfaces";

export default function Video() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [videos, setVideos] = useState<[]>();

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
		<>
			<h1 className="mb-5">Videos</h1>
			<div className="grid content-center grid-cols-2 gap-10 mb-10">
				{videos &&
					videos.slice(0, 4).map((video: IVideos) => (
						<div key={video.id}>
							<p className="mb-5 text-xl font-medium">{video.name}</p>
							<iframe
								className="w-full h-[700px]"
								src={`${apiConfig.videoURL}/${video.key}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					))}
			</div>
		</>
	);
}

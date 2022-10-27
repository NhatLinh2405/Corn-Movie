import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient } from "../../apis/axiosClient";
import tmdbReqs from "../../apis/tmdbReqs";
import Person from "./../../assets/person.png";
import { IReviews } from "../../interfaces";

export default function Review() {
	const { category, id } = useParams<{ id: string; category: string }>();
	const [reviews, setReviews] = useState<[]>();

	useEffect(() => {
		const getDetail = async () => {
			if (id && category) {
				const res = await axiosClient.get(tmdbReqs.getReviews(id, category));
				setReviews(res.data.results);
			}
		};
		getDetail();
	}, [id, category]);

	return (
		<div className="mb-10">
			<h1 className="my-5">Review</h1>
			{reviews && reviews.length > 0 ? (
				reviews?.slice(0, 4).map((review: IReviews) => (
					<div
						key={review.id}
						className="flex flex-col p-5 my-5 border-2 border-slate-200 rounded-xl"
					>
						<div className="flex items-center space-x-2">
							<img className="w-10 h-10 rounded-full" src={Person} alt="" />
							<div className="flex flex-col">
								<h1 className="text-lg font-semibold">{review.author}</h1>
								<p className="text-sm text-gray-400">
									{review.updated_at.slice(0, 10).split("-").reverse().join("-")}
								</p>
							</div>
						</div>
						<p className="mt-3 line-clamp-4">{review.content}</p>
					</div>
				))
			) : (
				<p className="p-5 text-xl">No Reviews Yet</p>
			)}
		</div>
	);
}

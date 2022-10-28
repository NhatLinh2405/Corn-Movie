import tv from "../../assets/tv.png";
import video from "../../assets/video/video-tv-0819.m4v";
import mobile from "../../assets/mobile.jpg";
import poster from "../../assets/boxshot.png";
import download from "../../assets/video/download.gif";
import kid from "../../assets/kid.png";
import vn from "../../assets/vn.jpg";

import { IIntroduce } from "../../interfaces";

export default function Introduce() {
	const introduce: IIntroduce[] = [
		{
			id: 1,
			title: "Watch anywhere.",
			content: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
			img: tv,
			video: video,
		},
		{
			id: 2,
			title: "Download your shows to watch offline.",
			content: "Save your favorites easily and always have something to watch.",
			img: mobile,
			mobile: true,
			poster: poster,
			download: download,
		},
		{
			id: 3,
			title: "Watch everywhere",
			content: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
			img: "",
		},
		{
			id: 4,
			title: "Create profiles for kids.",
			content:
				"Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
			img: kid,
		},
		{
			id: 5,
			title: "Have an Android Phone? Get our new free plan!",
			content: "Watch a selection of new movies and TV shows without adding any payment details!",
			img: vn,
		},
	];
	return (
		<>
			{introduce.map((item) => (
				<div className="text-white border-t-8 border-[#222]" key={item.id}>
					<div
						className={`${
							item.id % 2 === 0 && "flex-row-reverse"
						} justify-between py-14 px-36 flex-center-y`}
					>
						<div className="w-1/2">
							<h1 className="mb-10 text-5xl font-bold">{item.title}</h1>
							<p className="text-2xl">{item.content}</p>
						</div>
						<div className="relative w-1/2">
							{item.video ? (
								<>
									<img src={item.img} alt="" />
									<video
										className="absolute w-[444px] right-[90px] top-[99px] object-cover"
										autoPlay
										loop
										muted
									>
										<source src={item.video} type="video/mp4" />
									</video>
								</>
							) : (
								<>
									{item.mobile ? (
										<>
											<img src={mobile} alt="" />
											<div className="absolute justify-between w-2/3 px-8 py-3 bg-black border-2 left-[100px] bottom-10 rounded-2xl flex-center-y border-slate-200">
												<img src={item.poster} className="w-20" alt="" />
												<div>
													<p>Stranger Things</p>
													<p className="text-blue-400">Downloading...</p>
												</div>
												<img
													className="w-1/6 text-white"
													src={item.download}
													alt=""
												/>
											</div>
										</>
									) : (
										<img src={item.img} alt="" className="object-contain w-full" />
									)}
								</>
							)}
						</div>
					</div>
				</div>
			))}
		</>
	);
}

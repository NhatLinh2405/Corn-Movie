import Linh from "../assets/NhatLinh.jpg";
import Header from "../layouts/Header";
import { ISocial, IInfos } from "../interfaces";

export default function Contact() {
	const info: IInfos[] = [
		{
			name: "Nguyễn Nhật Linh",
			role: "Frontend Developer",
			img: Linh,
			contact: [
				{
					id: 1,
					name: "Facebook",
					link: "https://www.facebook.com/lays.linh.96",
					img: "https://img.icons8.com/bubbles/100/000000/facebook-new.png",
				},
				{
					id: 2,
					name: "Youtube",
					link: "https://www.youtube.com/channel/UCTLzNTO_crOhiyFZFdhotDA",
					img: "https://img.icons8.com/bubbles/100/000000/youtube-squared.png",
				},
				{
					id: 3,
					name: "Github",
					link: "https://github.com/NhatLinh2405",
					img: "https://img.icons8.com/bubbles/100/000000/github.png",
				},
				{
					id: 4,
					name: "Instagram",
					link: "https://www.instagram.com/l.i.n.h.11/",
					img: "https://img.icons8.com/bubbles/100/000000/instagram.png",
				},
				{
					id: 5,
					name: "Gmail",
					link: "mailto:nhatlinh240501@gmail.com",
					img: "https://img.icons8.com/bubbles/100/000000/apple-mail.png",
				},
			],
		},
	];

	return (
		<div className="h-screen bg-cover bg-bgContact">
			<div className="w-full h-screen z-[1] bg-[rgba(0,0,0,0.4)]">
				<Header />
				<div className="text-white flex-center">
					<div className="mt-36 flex-center">
						{info.map((item: IInfos) => (
							<div className="flex-center" key={item.name}>
								<img
									className="object-cover border-2 rounded-full shadow-pop border-slate-200 w-[300px]"
									src={item.img}
									alt={item.name}
								/>
								<div className="ml-10">
									<div className="my-5 space-y-5">
										<h2 className="text-center underline underline-offset-8 decoration-primary">
											{item.name}
										</h2>
										<h1 className="mt-2 text-xl font-bold text-center">{item.role}</h1>
									</div>
									<div className="flex">
										{item.contact.map((item: ISocial) => (
											<a
												href={item.link}
												target="_blank"
												rel="noreferrer"
												key={item.id}
											>
												<img
													className="cursor-pointer text-9xl hover:scale-110"
													src={item.img}
													alt={item.name}
												/>
											</a>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<p className="mt-10 text-xl font-medium text-center text-white">
					Created By
					<span className="underline underline-offset-8 text-primary"> Nhật Linh </span>| All Rights
					Reserved.
				</p>
			</div>
		</div>
	);
}

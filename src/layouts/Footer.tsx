import Logo from "../assets/popcorn.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

import { ISocial } from "../interfaces";

const socialsMedia: ISocial[] = [
	{
		id: 1,
		icon: <BsFacebook />,
		name: "Facebook",
		link: "https://www.facebook.com/lays.linh.96",
	},
	{
		id: 2,
		icon: <BsInstagram />,
		name: "Instagram",
		link: "https://www.instagram.com/l.i.n.h.11/",
	},
	{
		id: 3,
		icon: <BsGithub />,
		name: "Github",
		link: "https://github.com/NhatLinh2405",
	},
	{
		id: 4,
		icon: <AiOutlineMail />,
		name: "Gmail",
		link: "mailto:nhatlinh240501@gmail.com",
	},
];

export default function Footer() {
	return (
		<div className="w-full bg-bgfooter h-96 rounded-tr-xl rounded-tl-xl">
			<div className="px-16 py-10 text-white">
				<div className="pb-5 mx-3 cursor-pointer flex-center-y">
					<img src={Logo} className="object-contain w-16 mr-3 cursor-pointer" alt="logo popcorn" />
					<h1 className="text-5xl tracking-wide animate-pulse text-primary">Corn</h1>
				</div>
				<div className="grid grid-cols-4 gap-5 justify-items-center">
					<div>
						<div className="my-10 flex-center">
							{socialsMedia.map((social) => (
								<a
									key={social.id}
									href={social.link}
									target="_blank"
									rel="noreferrer"
									className="p-3 mx-3 text-3xl text-black rounded-xl bg-slate-300 hover:bg-red-500 hover:text-white"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
					<div className="my-5 space-y-5 text-xl param">
						<p>Help Center</p>
						<p>Jobs</p>
						<p>Cookie Preferences</p>
					</div>
					<div className="my-5 space-y-5 text-xl param">
						<p>Gift Cards</p>
						<p>Terms of Use</p>
						<p>Corporate Information</p>
					</div>
					<div className="my-5 space-y-5 text-xl param">
						<p>Media Center</p>
						<p>Privacy</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
			{/* <p className="text-xl text-center text-white">© 2022 Corn. All rights reserved.</p> */}
			<p className="text-xl text-center text-white">
				Created By <span className="text-primary"> Nhật Linh </span>| All Rights Reserved.
			</p>
		</div>
	);
}

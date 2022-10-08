import Logo from "../assets/popcorn.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

interface ISocial {
	id: number;
	link: string;
	icon: JSX.Element;
}

const socialsMedia: ISocial[] = [
	{
		id: 1,
		icon: <BsFacebook />,
		link: "https://www.facebook.com/lays.linh.96",
	},
	{
		id: 2,
		icon: <BsInstagram />,
		link: "https://www.instagram.com/l.i.n.h.11/",
	},
	{
		id: 3,
		icon: <BsGithub />,
		link: "https://github.com/NhatLinh2405",
	},
	{
		id: 4,
		icon: <AiOutlineMail />,
		link: "mailto:nhatlinh240501@gmail.com",
	},
];

export default function Footer() {
	return (
		<div className="bg-bgfooter h-96 w-full rounded-tr-xl rounded-tl-xl">
			<div className="px-16 py-10 text-white">
				<div className="flex-center-y pb-5 mx-3">
					<img src={Logo} className="object-contain w-16 cursor-pointer mr-3" alt="logo popcorn" />
					<h1 className="tracking-wide text-5xl animate-pulse text-primary">Corn</h1>
				</div>
				<div className="grid grid-cols-4 gap-5 justify-items-center">
					<div>
						<div className="flex-center my-10">
							{socialsMedia.map((social) => (
								<a
									key={social.id}
									href={social.link}
									target="_blank"
									rel="noreferrer"
									className="text-3xl mx-3 p-3 rounded-xl bg-slate-300 text-black hover:bg-red-500 hover:text-white"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
					<div className="space-y-5 my-5 text-xl">
						<p>Help Center</p>
						<p>Jobs</p>
						<p>Cookie Preferences</p>
					</div>
					<div className="space-y-5 my-5 text-xl">
						<p>Gift Cards</p>
						<p>Terms of Use</p>
						<p>Corporate Information</p>
					</div>
					<div className="space-y-5 my-5 text-xl">
						<p>Media Center</p>
						<p>Privacy</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
			{/* <p className="text-center text-white text-xl">© 2022 Corn. All rights reserved.</p> */}
			<p className="text-center text-white text-xl">
				Created By <span className="text-primary"> Nhật Linh </span>| All Rights Reserved.
			</p>
		</div>
	);
}

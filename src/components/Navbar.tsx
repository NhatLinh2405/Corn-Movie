import Logo from "../assets/popcorn.png";
import Avatar from "../assets/avatar.gif";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [show, setShow] = useState<boolean>(false);

	const transitionNavBar = () => {
		window.scrollY > 100 ? setShow(true) : setShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div
			className={`fixed top-0 w-full z-[1] shadow-pop border-b-red-400  ${
				show === true ? "bg-black" : "bg-transparent"
			} `}
		>
			<div className="justify-between px-24 py-2 flex-center-y">
				<img src={Logo} alt="" className="object-contain w-20 cursor-pointer" />
				<img src={Avatar} alt="" className="w-16 cursor-pointer" />
			</div>
		</div>
	);
}

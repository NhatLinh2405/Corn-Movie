import Navbar from "../components/Navbar";
import Logo from "../assets/popcorn.png";
import Avatar from "../assets/video/avatar.gif";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const [show, setShow] = useState<boolean>(false);
	const location = useLocation();

	const transitionNavBar = () => {
		window.scrollY > 100 ? setShow(true) : setShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);
	return (
		<div
			className={`fixed top-0 w-full inset-x-0 z-[3] shadow-pop  ${
				show === true || location.pathname === "/profile" ? "bg-black" : "bg-transparent"
			} `}
		>
			<div className="justify-between px-24 py-2 lg:px-16 md:px-8 sm:px-2 flex-center-y">
				<Link to="/">
					<img src={Logo} alt="" className="object-contain w-20 cursor-pointer" />
				</Link>
				<Navbar />
				<Link to="/profile" className="md:hidden">
					<img src={Avatar} alt="" className="w-16 cursor-pointer" />
				</Link>
			</div>
		</div>
	);
}

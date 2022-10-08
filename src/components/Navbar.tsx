import Logo from "../assets/popcorn.png";
import Avatar from "../assets/avatar.gif";
import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

// interface INavLink {
// 	isActive?: boolean;
// 	to: string;
// 	children: any;
// }

export default function Navbar() {
	const [show, setShow] = useState<boolean>(false);

	const transitionNavBar = () => {
		window.scrollY > 100 ? setShow(true) : setShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	// const NavLinkStyle = ({ isActive, to, children }: INavLink) => {
	// 	return (
	// 		<NavLink
	// 			to={to}
	// 			className={`${
	// 				isActive ? "text-primary" : "text-white"
	// 			} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
	// 		>
	// 			{children}
	// 		</NavLink>
	// 	);
	// };

	return (
		<div
			className={`fixed top-0 w-full z-10 shadow-pop  ${
				show === true ? "bg-black" : "bg-transparent"
			} `}
		>
			<div className="justify-between px-24 py-2 flex-center-y">
				<Link to="/">
					<img src={Logo} alt="" className="object-contain w-20 cursor-pointer" />
				</Link>

				<div className="text-white flex-center space-x-10">
					<NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "text-white")}>
						<h4>Home</h4>
					</NavLink>
					<NavLink
						to="/movies"
						className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
					>
						<h4>Movies</h4>
					</NavLink>
					<NavLink
						to="/tv-series"
						className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
					>
						<h4>TV Series</h4>
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
					>
						<h4>Contact</h4>
					</NavLink>
				</div>
				<img src={Avatar} alt="" className="w-16 cursor-pointer" />
			</div>
		</div>
	);
}

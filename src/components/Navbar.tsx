import Logo from "../assets/popcorn.png";
import Avatar from "../assets/avatar.gif";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { INavLink } from "../interface";

export default function Navbar() {
	const [show, setShow] = useState<boolean>(false);
	const location = useLocation();

	const transitionNavBar = () => {
		window.scrollY > 100 ? setShow(true) : setShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	const NavLinkStyle = ({ to = "/", children }: INavLink) => {
		return (
			<NavLink to={to} className={({ isActive }) => (isActive ? "text-primary" : "text-white")}>
				{children}
			</NavLink>
		);
	};

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

				<div className="space-x-10 text-white flex-center">
					<NavLink
						to="/"
						className={`${
							location.pathname === "/" ? "text-primary" : "text-white"
						} hover:text-white`}
					>
						<h4>Home</h4>
					</NavLink>
					<NavLinkStyle to="/movies">
						<h4>Movies</h4>
					</NavLinkStyle>
					<NavLinkStyle to="/tv-series">
						<h4>TV Series</h4>
					</NavLinkStyle>
					<NavLinkStyle to="/contact">
						<h4>Contact</h4>
					</NavLinkStyle>
				</div>
				<img src={Avatar} alt="" className="w-16 cursor-pointer" />
			</div>
		</div>
	);
}

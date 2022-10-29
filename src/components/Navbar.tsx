import { Link, NavLink, useLocation } from "react-router-dom";
import { INavLink } from "../interfaces";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Avatar from "../assets/video/avatar.gif";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
	const location = useLocation();
	const NavLinkStyle = ({ to = "/", children }: INavLink) => {
		return (
			<NavLink to={to} className={({ isActive }) => (isActive ? "text-primary" : "text-white")}>
				{children}
			</NavLink>
		);
	};

	return (
		<>
			<div className="space-x-10 text-white md:hidden flex-center">
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
			<Popover className="hidden md:flex-center">
				<Popover.Button className="h-full p-2 font-bold text-white transition-all rounded-md shadow-md outline-none gap-x-2 bg-bg_right bg-slate-500">
					<AiOutlineMenu className="text-3xl" />
				</Popover.Button>
				<Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
				<Transition
					as={Fragment}
					enter="transition-all duration-500"
					leave="transition-all duration-500"
					enterFrom="translate-x-full opacity-0"
					enterTo="translate-x-0 opacity-100"
					leaveFrom="translate-x-0 opacity-100"
					leaveTo="translate-x-full opacity-0"
				>
					<Popover.Panel className="fixed z-10 w-full max-w-[200px] right-0 top-0 h-full bg-black shadow-popup overflow-y-auto p-4 space-y-4 ">
						<div className="flex flex-col mt-10 space-y-5 text-black gap-y-2">
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
							<Link to="/profile">
								<img src={Avatar} alt="" className="w-16 cursor-pointer" />
							</Link>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</>
	);
}

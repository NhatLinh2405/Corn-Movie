import { NavLink, useLocation } from "react-router-dom";
import { INavLink } from "../interfaces";

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
		<div className="space-x-10 text-white flex-center">
			<NavLink
				to="/"
				className={`${location.pathname === "/" ? "text-primary" : "text-white"} hover:text-white`}
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
	);
}

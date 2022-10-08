import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className="bg-black">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

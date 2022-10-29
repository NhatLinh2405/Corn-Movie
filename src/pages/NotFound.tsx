import Header from "../layouts/Header";
import search from "../assets/video/search.gif";

export default function NotFound() {
	return (
		<>
			<Header />
			<div className="h-screen overflow-hidden bg-black flex-center md:flex-col sm:px-2">
				<img src={search} alt="" />
				<div className="text-center text-white">
					<h1 className="my-10 text-7xl lg:text-6xl sm:text-4xl animate-pulse">
						Oop, Nothing here
					</h1>
					<h1 className="my-10 text-5xl lg:text-4xl sm:text-xl">Hey, What are you waiting for? </h1>
					<h1 className="my-10 text-5xl lg:text-4xl sm:text-xl">Go back now!</h1>
				</div>
			</div>
		</>
	);
}

import Header from "../layouts/Header";
import search from "../assets/video/search.gif";

export default function NotFound() {
	return (
		<div className="">
			<Header />
			<div className="h-screen bg-black flex-center">
				<img src={search} alt="" />
				<div className="text-center text-white">
					<h1 className="my-10 text-7xl">Oop, Nothing here</h1>
					<h1 className="my-10 text-5xl">Hey, What are you waiting for? </h1>
					<h1 className="my-10 text-5xl">Go back now!</h1>
				</div>
			</div>
		</div>
	);
}

import Header from "../layouts/Header";
import person from "../assets/person.png";
import { useAppSelector } from "./../app/store";
import { selectUser } from "../reducers/userSlice";
import { auth } from "../apis/firebase";

export default function Profile() {
	let user = useAppSelector(selectUser);

	return (
		<>
			<div className="flex-col w-full h-screen overflow-hidden bg-black flex-center">
				<Header />
				<div className="mx-auto space-y-10 text-white">
					<h1 className="text-5xl font-bold md:text-center">Profile</h1>
					<div className="space-x-10 md:space-x-0 md:space-y-10 flex-center md:flex-col">
						<img src={person} alt="person" className="w-48 h-48 sm:w-40 sm:h-40 rounded-xl" />
						<div className="flex flex-col space-y-10">
							<h1 className="px-10 py-4 text-2xl font-bold text-black bg-gray-200 sm:text-lg rounded-xl">
								{user && user.email}
							</h1>
							<div className="text-white flex-center">
								<button
									className="px-8 py-5 text-lg font-bold hover:scale-105 md:hover:scale-100 rounded-xl bg-primary"
									onClick={() => auth.signOut()}
								>
									Sign Out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

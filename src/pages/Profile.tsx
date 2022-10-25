import Header from "../layouts/Header";
import Linh from "../assets/NhatLinh.jpg";
import { useAppSelector } from "./../app/store";
import { selectUser } from "../reducers/userSlice";
import { auth } from "../apis/firebase";

export default function Profile() {
	let user = useAppSelector(selectUser);

	return (
		<>
			<div className="flex-col h-screen bg-black flex-center">
				<Header />
				<div className="mx-auto space-y-10">
					<h1 className="text-5xl font-bold text-white">Edit Profile</h1>
					<div className="flex space-x-10">
						<img src={Linh} alt="Linh" className="w-40 h-40 rounded-xl" />
						<div className="flex flex-col space-y-10">
							<h1 className="px-10 py-4 text-2xl font-bold bg-gray-200 rounded-xl">
								{user?.email}
							</h1>
							<div className="text-white">
								<div className="flex-center">
									<button
										className="px-8 py-5 text-lg font-bold text-white hover:scale-105 rounded-xl bg-primary"
										onClick={() => auth.signOut()}
									>
										Sign Out
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

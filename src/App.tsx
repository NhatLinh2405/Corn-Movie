import Layout from "./layouts";
import { useEffect } from "react";
import { auth } from "./apis/firebase";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/store";
import { logout, login, selectUser } from "./reducers/userSlice";
import { Home, NotFound, Contact, TvSeries, Movies, Detail, OurStory, Profile } from "./pages";

function App() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	useEffect(() => {
		const subscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						email: authUser.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return subscribe;
		// subscribe();
	}, [dispatch]);

	return (
		<>
			{!user ? (
				<OurStory />
			) : (
				<Routes>
					<>
						<Route path="/" element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="tv-series" element={<TvSeries />} />
							<Route path="movies" element={<Movies />} />
							<Route path=":category/:id" element={<Detail />} />
						</Route>
						<Route path="profile" element={<Profile />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</>
				</Routes>
			)}
		</>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";

import { Home, NotFound, Contact, TvSeries, Movies, Detail, OurStory, Login } from "./pages";
import { useEffect } from "react";
import { auth } from "./apis/firebase";

import { useAppDispatch, useAppSelector } from "./app/store";
import { logout, login, selectUser } from "./reducers/userSlice";

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
		subscribe();
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
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</>
				</Routes>
			)}
		</>
	);
}

export default App;

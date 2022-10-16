import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";

import { Home, NotFound, Contact, TvSeries, Movies, Detail, OurStory, Login } from "./pages";

function App() {
	const user = null;
	return (
		<>
			{!user ? (
				<>
					<OurStory />
					{/* <Routes>
						<Route path="/login" element={<Login />} />
					</Routes> */}
				</>
			) : (
				<Routes>
					<>
						<Route path="/" element={<Layout />}>
							<Route path="/" element={<Home />} />
							{/* <Route path="/login" element={<Login />} /> */}
							<Route path="tv-series" element={<TvSeries />} />
							<Route path="movies" element={<Movies />} />
							<Route path="movie/:id" element={<Detail />} />
							<Route path="tv/:id" element={<Detail />} />
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

import { Routes, Route } from "react-router-dom";

import Layout from "./layouts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/tv-series" element={<TvSeries />} />
				<Route path="/movies" element={<Movies />} />
			</Route>
			<Route path="contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;

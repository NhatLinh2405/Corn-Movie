import { Routes, Route } from "react-router-dom";

import Layout from "./layouts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;

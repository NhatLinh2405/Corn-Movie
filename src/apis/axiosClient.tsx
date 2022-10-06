import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default axiosClient;

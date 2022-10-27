import axios from "axios";

const apiConfig = {
	baseURL: "https://api.themoviedb.org/3",
	imgURL: "https://image.tmdb.org/t/p/original",
	videoURL: "https://www.youtube.com/embed",
};

const axiosClient = axios.create({
	baseURL: apiConfig.baseURL,
});

export { axiosClient, apiConfig };

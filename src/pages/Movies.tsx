import axiosClient from "../apis/axiosClient";
import tmdbReqs from "../apis/tmdbReqs";
import { useState } from "react";
import { IMovie } from "../interface";
import { useEffect } from "react";

export default function Movies() {
	const [movie, setMovie] = useState<IMovie>();

	useEffect(() => {
		console.log("hello");
	}, []);
	return <div></div>;
}

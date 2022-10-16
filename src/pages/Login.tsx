import { Link } from "react-router-dom";

export default function Login() {
	// const register = (e: any) => {
	// 	e.preventDefault();
	// };
	// const signIn = (e: any) => {
	// 	e.preventDefault();
	// };
	return (
		<div className="p-5 mx-auto bg-black w-[500px]">
			<form action="" className="flex flex-col">
				<h1 className="text-white">Sign In</h1>
				<input
					className="w-full p-5 my-3 border-none rounded-lg h-14"
					type="email"
					placeholder="email"
				/>
				<input
					className="w-full p-5 my-3 border-none rounded-lg h-14"
					type="password"
					placeholder="password"
				/>
				<button
					className="px-10 py-5 mt-10 text-white border-none rounded-lg bg-primary"
					type="submit"
				>
					Sign in
				</button>
			</form>
			<h4 className="text-white">
				New to Netflix?
				<Link to="/"> Sign up now.</Link>
			</h4>
			{/* <Link className="underline underline-offset-2" to="/a">
				Sign up now
			</Link> */}
		</div>
	);
}

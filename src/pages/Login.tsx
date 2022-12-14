import { auth } from "../apis/firebase";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import { SignIn, SignUp } from "../components/Login";

export default function Login() {
	const navigate = useNavigate();
	const [logIn, setLogIn] = useState<boolean>(false);

	const googleSignIn = (): void => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				toast.success("Đăng nhập Google thành công");
				navigate("/");
			})
			.catch((err) => {
				toast.error(err.code);
			});
	};

	// fb đăng nhập lỗi với ng khác
	const signInWithFacebook = (): void => {
		const provider = new FacebookAuthProvider();
		provider.addScope("user_birthday");
		auth.languageCode = "it";
		provider.setCustomParameters({
			display: "popup",
		});

		signInWithPopup(auth, provider)
			.then((res) => {
				toast.success("Đăng nhập Facebook thành công");
				navigate("/");
			})
			.catch((err) => {
				toast.error(err.code);
			});
	};

	return (
		<div className="text-white flex-center sm:px-2 sm:pt-5">
			<div className="w-[480px] rounded-2xl py-4 px-10 sm:px-4 bg-[rgba(255,255,255,.5)]">
				{logIn ? (
					<>
						<SignUp />
						<div className="mt-5 text-center">
							<span
								className="text-lg underline cursor-pointer underline-offset-8"
								onClick={() => setLogIn(false)}
							>
								Login In
							</span>
						</div>
					</>
				) : (
					<>
						<SignIn />
						<div className="mt-5 text-center">
							<span
								className="text-lg underline cursor-pointer underline-offset-8"
								onClick={() => setLogIn(true)}
							>
								Create a new account
							</span>
						</div>
					</>
				)}
				<div className="flex flex-col gap-6 mt-8 text-center ">
					<h3 className="text-lg font-normal tracking-widest uppercase">Other Sign in Platform</h3>
					<div className="gap-4 space-x-10 flex-center">
						<Link
							className="flex-center w-[50px] h-[50px] rounded-full bg-black text-white hover:scale-110 md:hover:scale-100"
							to="/"
							onClick={signInWithFacebook}
						>
							<BsFacebook className="text-3xl" />
						</Link>
						<Link
							className="flex-center w-[50px] h-[50px] rounded-full bg-black text-white hover:scale-110 md:hover:scale-100"
							to="/"
						>
							<FcGoogle onClick={googleSignIn} className="text-3xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

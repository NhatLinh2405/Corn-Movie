import { useRef } from "react";
import { auth } from "../apis/firebase";

import { AiFillUnlock, AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
	signInWithPopup,
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";

export default function Login() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

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
				toast.success("Đăng nhập thành công");
				navigate("/");
			})
			.catch((err) => {
				toast.error(err.code);
			});
	};

	const signIn = (e: React.MouseEvent): void => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
			.then((res) => {
				toast.success("Đăng nhập thành công");
				navigate("/");
			})
			.catch((err) => {
				toast.error(err.code);
			});
	};

	const register = (e: React.MouseEvent) => {
		e.preventDefault();
		if (emailRef.current && passwordRef.current) {
			createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
				.then((res) => {
					toast.success("Đăng nhập thành công");
					navigate("/");
				})
				.catch((err) => {
					toast.error(err.code);
				});
		}
	};

	return (
		<div className="text-white flex-center">
			<div className="w-[480px] rounded-2xl relative py-8 px-10 bg-[rgba(255,255,255,.5)] before:content-[''] before:absolute before:bg-[rgba(255,255,255,.15)] before:inset-0 before:-rotate-6 before:z-[-1]">
				<div className="my-8 text-center">
					<h1 className="mb-5 font-semibold">Sign In</h1>
					<div>Please login to use platform</div>
				</div>
				<form action="" className="flex flex-col gap-6">
					<div className="relative text-black">
						<AiOutlineMail className="text-3xl absolute-center-y left-5" />
						<input
							className="w-full  focus:bg-white bg-[rgba(255,255,255,.6)] px-8 py-4 pl-16 border-none rounded-full outline-none"
							type="email"
							placeholder="Your mail..."
							required
							autoFocus
							ref={emailRef}
						/>
					</div>
					<div className="relative text-black">
						<AiFillUnlock className="text-3xl absolute-center-y left-5" />
						<input
							className="w-full focus:bg-white bg-[rgba(255,255,255,.6)] px-8 py-4 pl-16 border-none rounded-full outline-none"
							type="password"
							placeholder="Your password..."
							required
							ref={passwordRef}
						/>
					</div>
					<button
						className="p-4 font-medium tracking-widest text-white uppercase bg-black rounded-full hover:bg-primary hover:scale-105 shadow-pop"
						type="submit"
						onClick={signIn}
					>
						Sign in
					</button>
				</form>
				<div className="mt-5 text-center">
					Don't have an account?{" "}
					<Link className="underline underline-offset-4 " onClick={register} to="/">
						Create a new account
					</Link>
				</div>
				<div className="flex flex-col gap-6 mt-8 text-center ">
					<h3 className="text-lg font-normal tracking-widest uppercase">Other Sign in Platform</h3>
					<div className="gap-4 flex-center">
						<Link
							className="flex-center w-[50px] h-[50px] rounded-full bg-black text-white hover:scale-110"
							to="/"
							onClick={signInWithFacebook}
						>
							<BsFacebook className="text-3xl" />
						</Link>
						<Link
							className="flex-center w-[50px] h-[50px] rounded-full bg-black text-white hover:scale-110"
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

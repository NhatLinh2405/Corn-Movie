import { useRef } from "react";
import { auth } from "../../apis/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiFillUnlock, AiOutlineMail } from "react-icons/ai";

export default function SignUp() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

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
		<div>
			<div className="my-5 text-center">
				<h1 className="mb-5 font-semibold">Sign Up</h1>
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
					onClick={register}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}

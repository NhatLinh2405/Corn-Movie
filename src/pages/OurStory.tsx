import Logo from "../assets/popcorn.png";
import { Link } from "react-router-dom";
import Avatar from "../assets/video/avatar.gif";

import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import Login from "./Login";
import { Questions, Introduce } from "../components/OutStory";

export default function OurStory() {
	const [email, seMail] = useState<string>("");
	const [signIn, setSignIn] = useState<boolean>(false);

	return (
		<>
			<div className="relative h-screen bg-no-repeat bg-cover bg-bgLogin shadow-pop">
				<div className="w-full h-screen bg-[rgba(0,0,0,0.3)]">
					<div className="justify-between px-24 py-2 sm:px-2 flex-center-y">
						<Link to="/" onClick={() => setSignIn(false)}>
							<img src={Logo} alt="" className="object-contain w-20 cursor-pointer" />
						</Link>
						{!signIn && (
							<img
								onClick={() => setSignIn(true)}
								src={Avatar}
								alt=""
								className="w-16 cursor-pointer"
							/>
						)}
					</div>
					{signIn ? (
						<Login />
					) : (
						<div className="flex-col md:px-5 space-y-5 text-center absolute top-[30%] inset-x-0 flex-center">
							<h1 className="text-5xl font-bold text-white lg:text-4xl md:text-3xl">
								Unlimited movies, TV shows, and more.
							</h1>
							<p className="text-2xl text-white lg:text-xl">Watch anywhere. Cancel anytime.</p>
							<p className="text-xl text-white lg:text-xl ">
								Ready to watch? Enter your email to create or restart your membership.
							</p>
							<div className="py-5">
								<form action="" className="flex md:items-center md:flex-col">
									<input
										value={email}
										className="px-6 py-8 text-xl border-none outline-none w-[500px] lg:w-[450px] h-14 md:w-[500px] sm:w-[320px]"
										type="email"
										readOnly
										placeholder="Email address"
										onChange={(e) => seMail(e.target.value)}
									/>
									<button
										onClick={() => setSignIn(true)}
										className="px-8 text-2xl font-medium text-white border-none outline-none md:text-xl lg:px-4 bg-primary md:w-[200px] md:mt-5 md:py-3"
									>
										<Link to="/login">
											Get Started
											<AiOutlineSend className="inline-block ml-4 text-3xl md:text-2xl" />
										</Link>
									</button>
								</form>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="bg-black">
				{!signIn && (
					<>
						<Introduce />
						<Questions />
					</>
				)}
			</div>
		</>
	);
}

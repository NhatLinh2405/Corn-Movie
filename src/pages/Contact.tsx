import Linh from "../assets/NhatLinh.jpg";
import Header from "../layouts/Header";

export default function Contact() {
	return (
		<>
			<Header />
			<div className="pb-10 text-white flex-center flex-col shadow-2xl h-screen bg-bgContact">
				<div className="flex-center">
					<img
						className="object-cover border-2 rounded-full shadow-pop border-slate-200 w-[300px]"
						src={Linh}
						alt="Nhat Linh"
					/>
					<div className="ml-10">
						<div className="my-5">
							<h2 className="text-center underline underline-offset-8  decoration-primary">
								Nguyễn Nhật Linh
							</h2>
						</div>
						<div className="flex">
							<a href="https://www.facebook.com/lays.linh.96" target="_blank" rel="noreferrer">
								<img
									src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
									alt="nhatlinh-facebook"
								/>
							</a>
							<a
								href="https://www.youtube.com/channel/UCTLzNTO_crOhiyFZFdhotDA"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://img.icons8.com/bubbles/100/000000/youtube-squared.png"
									alt="nhatlinh-youtube"
								/>
							</a>
							<a href="https://github.com/NhatLinh2405" target="_blank" rel="noreferrer">
								<img
									className="text-9xl"
									src="https://img.icons8.com/bubbles/100/000000/github.png"
									alt="nhatlinh-github"
								/>
							</a>
							<a href="https://www.instagram.com/l.i.n.h.11/" target="_blank" rel="noreferrer">
								<img
									src="https://img.icons8.com/bubbles/100/000000/instagram.png"
									alt="nhatlinh-instagram"
								/>
							</a>
							<a href="mailto:nhatlinh240501@gmail.com" target="_blank" rel="noreferrer">
								<img
									src="https://img.icons8.com/bubbles/100/000000/apple-mail.png"
									alt="nhatlinh-email"
								/>
							</a>
						</div>
					</div>
				</div>
				<p className="text-center font-medium mt-10  text-white text-xl">
					Created By <span className="underline-offset-8 underline text-primary"> Nhật Linh </span>|
					All Rights Reserved.
				</p>
			</div>
		</>
	);
}

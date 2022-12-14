import { Disclosure } from "@headlessui/react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

export default function Questions() {
	const Questions = [
		{
			id: 1,
			question: "What is Netflix?",
			answer1:
				"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
			answer2:
				"can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.There's always something new to discover and new TV shows and movies are added every week!",
		},
		{
			id: 2,
			question: "How much does Netflix cost?",
			answer1:
				"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.",
		},
		{
			id: 3,
			question: "Where can I watch?",
			answer1:
				"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
			answer2:
				"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
		},
		{
			id: 4,
			question: "How do I cancel?",
			answer1:
				"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
		},
		{
			id: 5,
			question: "What can I watch on Netflix?",
			answer1:
				"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
		},
		{
			id: 6,
			question: "Is Netflix good for kids?",
			answer1:
				"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
			answer2:
				"      Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
		},
	];

	return (
		<div className="flex-col w-full px-4 md:px-10 sm:px-2 py-10 text-white border-t-8 border-[#222] flex-center">
			<h1 className="py-10 text-5xl font-medium md:text-3xl sm:text-2xl">Frequently Asked Questions</h1>
			{Questions.map((item) => (
				<Disclosure key={item.id}>
					{({ open }) => (
						<>
							<div className="w-full my-3 max-w-4xl p-4 mx-auto bg-[#303030] rounded-2xl">
								<Disclosure.Button className="justify-between w-full px-4 py-2 text-sm font-medium text-left flex-center-y ">
									<span className="text-3xl md:text-2xl sm:text-sm">{item.question}</span>
									{open ? (
										<BsArrowUpCircle className="text-3xl" />
									) : (
										<BsArrowDownCircle className="text-3xl" />
									)}
								</Disclosure.Button>
								<Disclosure.Panel className="p-4 pb-2 my-3 ml-4 text-2xl text-black bg-white sm:text-sm md:text-xl rounded-xl">
									<p className="my-3">{item.answer1}</p>
									<p className="my-3">{item.answer2}</p>
								</Disclosure.Panel>
							</div>
						</>
					)}
				</Disclosure>
			))}
		</div>
	);
}

import { Link } from "react-router-dom";
import { IButton } from "../interfaces";

export default function Button({ className, name, Icon, link, href }: IButton) {
	return link ? (
		<Link
			className={`${className} px-4 py-3 font-semibold outline-none
	              rounded-xl flex-center cursor-pointer w-48
	              shadow-md tracking-wider`}
			to={href}
		>
			{Icon && <Icon className="mr-3 text-4xl transition-none" />}
			<p>{name}</p>
		</Link>
	) : (
		<button
			className={`${className} py-2 px-3 font-semibold
	               outline-none
	               rounded-md shadow-md
	               `}
		>
			<p>{name}</p>
			{Icon && <Icon className="mr-3 text-4xl transition-none" />}
		</button>
	);
}

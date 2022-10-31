import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface IProps {
	src: string;
	alt: string;
	className: string;
}

export default function LazyLoad({ src, alt, className }: IProps) {
	return (
		<div>
			<LazyLoadImage alt={alt} effect="blur" src={src} className={className} />
		</div>
	);
}

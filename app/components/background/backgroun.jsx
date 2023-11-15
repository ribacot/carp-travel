import Image from "next/image";
import css from "./background.module.css";
export default function Background({ url, style }) {
	return (
		<div className={`${css.wrapBg}`}>
			<Image
				className={style}
				alt="Mountains"
				src={url}
				placeholder="blur"
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: "cover",
					transform: "unset",
				}}
			/>
		</div>
	);
}

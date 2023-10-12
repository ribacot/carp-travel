import Image from "next/image";
import { exemplesArr } from "../examples";
import css from "./listOffers.module.css";
import activeImg from "@/app/img/weoffer/button_active.svg";

export default function ListOffers({ onClick, numItem, style }) {
	console.log(style);
	return (
		<div className={style}>
			<ul className={css.listoffers}>
				{exemplesArr.map(({ title }, i) => (
					<li key={title}>
						<button
							type="button"
							onClick={onClick}
							id={i}
							className={`${css.btnChenge} ${numItem === i + 1 && css.btnActive}`}
						>
							{numItem === i + 1 && <Image src={activeImg} width="6" height="6" alt="active button" />}
							{title}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

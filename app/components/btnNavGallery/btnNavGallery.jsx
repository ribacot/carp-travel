"use client"
import css from "./btnNavGallery.module.css"



export default function BtnNavGallery({ children,  style ,onChengeImg}) {


	return (
		<button type="button" className={`${css.btn} ${style}`} onClick={onChengeImg}>
			{children}
		</button>
	);
}

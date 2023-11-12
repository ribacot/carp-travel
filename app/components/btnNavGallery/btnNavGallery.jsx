"use client"
import css from "./btnNavGallery.module.css"

// import img1 from "../../img/gallery/Mask group.png";
// import img2 from "../../img/gallery/Mask group-1.png";
// import img3 from "../../img/gallery/Mask group-2.png";
// const imgArr = [img1, img2, img3];


export default function BtnNavGallery({ children,  style }) {
	// const onChengeImg = () => {
	// const arr=	imgArr.map((el, idx, arr) => {
	// 		idx + 1 > arr.length ? el[0] : el[idx + 1];
	// 	});
	// 	console.log(arr);
	// };


	return (
		<button type="button" className={`${css.btn} ${style}`}>
			{children}
		</button>
	);
}

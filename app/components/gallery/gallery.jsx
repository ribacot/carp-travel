// "use client"

import Image from "next/image";

import Background from "../background/backgroun";
import Section from "../section/section";

import imgBg from "../../img/section_bacground/gallery.png";
import img1 from "../../img/gallery/Mask group.png";
import img2 from "../../img/gallery/Mask group-1.png";
import img3 from "../../img/gallery/Mask group-2.png";

import css from "./gallery.module.css";
import BtnNavGallery from "../btnNavGallery/btnNavGallery";

const imgArr = [img1, img2, img3];

export default function Gallery() {
	const onChengeImg = () => {
		// imgArr.map((el, idx, arr) => {
		// 	idx + 1 > arr.length ? el[0] : el[idx + 1];
		// });
		console.log("chengeImg");
	};

	return (
		<Section id="gallery" title="our" span="gallery">
			<Background url={imgBg} />
			<div className={css.wrapperGallery}>
				<ul className={css.imgWrapper}>
					{imgArr.map((img, idx) => (
						<li
							className={`${css.imgThumb} ${idx === 1 ? css.mainImg : css.secondaryImg} ${
								idx > 2 && css.hidden
							}`}
						>
							<Image src={img} sizes="100%" />
						</li>
					))}
				</ul>
				<BtnNavGallery style={css.btnBack} >back</BtnNavGallery>
				<BtnNavGallery style={css.btnNext} >next</BtnNavGallery>
			</div>
		</Section>
	);
}

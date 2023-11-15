"use client";

import Image from "next/image";

import Background from "../background/backgroun";
import Section from "../section/section";

import imgBg from "../../img/section_bacground/gallery.png";

import img1 from "@/app/img/gallery/img1.png";
// import img1 from "../../img/gallery/Mask group.png";
import img2 from "@/app/img/gallery/img2.png";
import img3 from "@/app/img/gallery/img3.png";

import css from "./gallery.module.css";
import BtnNavGallery from "../btnNavGallery/btnNavGallery";
import { useState } from "react";

const defaultimgArr = [img1, img2, img3];

export default function Gallery() {
	const [imgArr, setImgArr] = useState(defaultimgArr);
	const onChengeImgNext = () => {
		const newArr = imgArr?.reduce((acc, el, idx, arr) => {
			if (idx === imgArr.length - 1) {
				acc = [el, ...arr];
			}
			return acc;
		}, []);
		newArr.splice(-1, 1);

		setImgArr(newArr);
	};
	const onChengeImgPrev = () => {
		const newArr = imgArr?.reduce((acc, el, idx, arr) => {
			if (idx === 0) {
				acc = [...arr, el];
			}
			return acc;
		}, []);
		newArr.splice(0, 1);

		setImgArr(newArr);
	};
	return (
		<Section id="gallery" title="our" span="gallery">
			<Background url={imgBg} />
			<div className={css.wrapperGallery}>
				<ul className={css.imgWrapper}>
					{imgArr.map((img, idx) => {
						return (
							<li
								key={img.src}
								className={`${css.imgThumb} ${
									idx === 1 ? css.mainImg : css.secondaryImg
								} ${idx > 2 ? css.hidden : null}`}
							>
								<Image src={img} sizes="100%" alt="Nature" />
							</li>
						);
					})}
				</ul>
				<BtnNavGallery style={css.btnBack} onChengeImg={onChengeImgPrev}>
					back
				</BtnNavGallery>
				<BtnNavGallery style={css.btnNext} onChengeImg={onChengeImgNext}>
					next
				</BtnNavGallery>
			</div>
		</Section>
	);
}

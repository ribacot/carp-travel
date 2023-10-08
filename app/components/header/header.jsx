"use client";
import Image from "next/image";
import logo from "@/app/img/Logo.svg";
import Container from "../container/container";
import { useEffect, useState } from "react";
import css from "./header.module.css";
import Modal from "../modal/modal";
import Navigation from "../navigation/navigtion";

export default function Header() {
	const [isMobilActive, setIsMobilActive] = useState(false);

	useEffect(() => {
		if (isMobilActive) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	});

	const onChangeIsActive = (e) => {
		setIsMobilActive(!isMobilActive);
	};

	return (
		<header className={css.header}>
			<Container>
				<nav className={css.nav}>
					<Image src={logo} width={61} height="auto" alt="Logo" />

					{!isMobilActive && (
						<button onClick={onChangeIsActive} className={css.btnMenu}>
							Menu
						</button>
					)}

					{isMobilActive && (
						<div className={css.btnMenu}>
							<Modal onClose={onChangeIsActive}>
								<Navigation onClose={onChangeIsActive} />
							</Modal>
						</div>
					)}
					<div className={css.adaptiveNav}>
						<Navigation />
					</div>
				</nav>
			</Container>
		</header>
	);
}

"use client";
import Image from "next/image";
import logo from "@/app/img/Logo.svg";
import Container from "../container/container";
import { useEffect, useRef, useState } from "react";
import css from "./header.module.css";
import { useHeaderHeigth } from "../heightContext/heigthContext";
import Modal from "../modal/modal";
import Navigation from "../navigation/navigtion";

export default function Header() {
  const headerRef = useRef();
  const [isMobilActive, setIsMobilActive] = useState(false);
  const { setHeigth } = useHeaderHeigth();
  // const [isNav, setIsNav] = useState(false);
  // const heigthHeader = headerRef.current.getBoundingClientRect().height;
  // heigthHeader && setHeigth(heigthHeader);

  useEffect(() => {
    const heigthHeader = headerRef.current.getBoundingClientRect().height;
    heigthHeader && setHeigth(heigthHeader);
  }, []);

  // useEffect(() => {
  //   const widthHeader = headerRef.current.getBoundingClientRect().width;
  //   if (widthHeader >= 768) setIsNav(true);
  // }, [isNav]);

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
    <header ref={headerRef} className={css.header}>
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

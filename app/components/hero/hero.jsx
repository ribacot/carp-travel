"use client";
import { useHeaderHeigth } from "../heightContext/heigthContext";
import css from "./hero.module.css";
import bacgroundImage from "@/app/img/section_bacground/hero2x.png";
import Background from "../background/backgroun";
import { allFirstLetterUp } from "../servises";
import JoinNow from "../btnJoinNow/btnJoinNow";
import Section from "../section/section";

export default function Hero() {
  const { heigth } = useHeaderHeigth();
  const locations = [
    "hoverla",
    "yaremche",
    "zakarpattia",
    "vorokhta",
    "synevyr lake",
    "bukovel",
  ];

  return (
    <Section style={css.hero} padding={true}>
      <Background url={bacgroundImage} />
      <div className={css.heroFlex}>
        <div className={css.h1Tablet}>
          <h1>
            <span>Uncover </span>
            Carpathian’s Secrets
          </h1>
          <ul className={css.locations}>
            {locations.map((el, idx) => (
              <li key={el}>
                {idx !== locations.length - 1
                  ? allFirstLetterUp(el) + " /"
                  : allFirstLetterUp(el)}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.wrapper}>
          <h2 className={css.heroH2}>
            <span className={css.numberH2}>
              7<span className={css.h2Days}>days</span>
            </span>
            <span className={css.heroH2Span}>journey</span>
          </h2>
          <div className={css.h1Mobile}>
            <h1>
              <span>Uncover </span>
              Carpathian’s Secrets
            </h1>
            <ul className={css.locations}>
              {locations.map((el, idx) => (
                <li key={el}>
                  {idx !== locations.length - 1
                    ? allFirstLetterUp(el) + " /"
                    : allFirstLetterUp(el)}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.thumbDescriotion}>
            <p className={css.description}>
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <JoinNow url="#contacts">join now</JoinNow>
          </div>
        </div>
      </div>
    </Section>
  );
}

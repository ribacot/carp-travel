"use client";
import { useState } from "react";
import {exemplesArr} from "./examples";
import WeOfferItem from "./weOfferItem/weOfferItem";

import css from "./weOffer.module.css";
import Background from "../background/backgroun";
import Section from "../section/section";

export default function Weoffer() {
  const [numItem, setNumItem] = useState(1);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const onClick = (e) => {
    const { id } = e.target;
    setNumItem(Number(id) + 1);
    setButtonIsActive(true);
  };
  const select = (i) => exemplesArr.find((_, idx) => idx === i - 1);
  const selectedElement = select(numItem);
  
  return (
    <Section title="we" span="offer" id="services" style={css.section}>
      <Background url={selectedElement.background} />
      <p className={css.counterWrapper}>
        <span className={css.counterItem}>{numItem.toString().padStart(2,"0")}</span>/
        <span className={css.counterSumm}>{exemplesArr.length.toString().padStart(2,"0")}</span>
      </p>
      <WeOfferItem
        item={selectedElement}
        chengeCard={onClick}
        numItem={numItem}
      />
    </Section>
  );
}

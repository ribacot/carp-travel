import Background from "../background/backgroun";
import backgroundImage from "../../img/section_bacground/we_are.png";
import css from "./about.module.css";
import Section from "../section/section";

export default function About() {
  return (
    <Section
      id="about"
      title="who"
      span="we are"
      style={css.sectionAbout}
    >
      <Background url={backgroundImage} style={css.background} />
      <div className={css.wrapperDeskriptions}>
        <p className={css.team}>
          <span className="spanText">a team of enthusiasts</span> who are fully
          committed to the mission of creating unforgettable and extraordinary
          trips to the most beautiful parts of the Carpathians. Our goal is not
          just to show you the natural wonders of the mountains, but to provide
          you with a deep immersion in their magical atmosphere.
        </p>
        <p className={css.believe}>
          <span className="spanText">We believe</span> that nature has the power
          to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
      </div>
      <div className={css.thumb}>
        <div className={css.h3decor}>
          <h3 className={css.h3right}>From vacationers </h3>
          <h3 className={css.h3left}>to active travelers</h3>
        </div>
        <p>we have a tour for everyone.</p>
      </div>
      <div className={css.wrapperParagraphWeUse}>
        <p className={css.paragraphWeUse}>
          <span className="spanText">We use methods</span> that are time-tested
          and proven. Our expert guides with in-depth knowledge of the
          Carpathian landscapes lead you safely through the mysteries of these
          mountains.
        </p>
      </div>
    </Section>
  );
}

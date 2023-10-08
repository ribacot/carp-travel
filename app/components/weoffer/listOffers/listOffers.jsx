import Image from "next/image";
import examples from "../examples";
import css from "./listOffers.module.css";
import activeImg from "@/app/img/weoffer/button_active.svg"

export default function ListOffers({ onClick, numItem,tagline,style }) {
  console.log(style)
  return (<div>    <ul className={`${css.listoffers} ${style}`}>
    {examples.map(({ title }, i) => (
      <li key={title}>
        <button type="button" onClick={onClick} id={i} className={`${css.btnChenge} ${numItem === i + 1 && css.btnActive}`}>
          {numItem === i + 1 && <Image src={activeImg} alt="active button"/>}{title}
        </button>
      </li>
    ))}
  </ul>
  <p className={css.titleExempleTablet}>{tagline}</p>

</div>
  );
}

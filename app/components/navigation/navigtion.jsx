import Link from "next/link";
import css from "./navigation.module.css"
import { firstLetterUp } from "../servises";

export default function Navigation({onClose}) {
    const linksNames = ["about", "services", "career", "gallery", "contacts"];
  return (
    <ul className={css.navList}>
      {linksNames.map((el) => (
        <li key={el} onClick={onClose}>
          <Link href={`#${el}`} className={css.navLink} >
            {firstLetterUp(el)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

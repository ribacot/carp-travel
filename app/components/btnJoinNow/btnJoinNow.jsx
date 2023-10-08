import Link from "next/link";
import css from "./btnJoinNow.module.css";

export default function JoinNow({ children, url }) {
  return (
    <Link href={url} className={css.btn}>
      {children} 
      <div className={css.leftTop}></div>
      <div className={css.leftBottom}></div>
      <div className={css.rightTop}></div>
      <div className={css.rightBottom}></div>
    </Link>
  );
}

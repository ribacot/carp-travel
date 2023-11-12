import Link from "next/link";
import css from "./contacts.module.css"
export default function Contacts() {
  const social = ["facebook", "instagram", "youtube", "tiktok"];
  return (
    <div className={css.wrapperContacts}>
      <div className={css.wrapperPhone}>
        <ul >
          <li>
            <Link href="tel:+380981234567" className={css.link}>+38 (098) 12 34 567</Link>
          </li>
          <li>
            <Link href="tel:+380981234567" className={css.link}>+38 (073) 12 34 567</Link>
          </li>
        </ul>
        <span>Phone number</span>
      </div>
      <div className={css.wrapperMail}>
        <Link href="mailto:support@carptravel.com" className={css.link}>support@carptravel.com</Link>
        <span>E-mail</span>
      </div>
      <div className={css.wrapperSocial}>
      <span>Follow us</span>
        <ul className={css.listSocial}>
          {social.map((el) => (
            <li key={el}>
              <Link href="#" className={css.link}>{el}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

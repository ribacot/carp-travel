import Background from "../background/backgroun";
import Container from "../container/container";
import Form from "../form/form";
import Contacts from "./contacts/contacts";
import backgroundImage from "../../img/section_bacground/contact.png";
import css from "./footer.module.css";

export default function Footer() {
	return (
		<footer id="contacts" className={css.footer}>
			<Background url={backgroundImage} />
			<Container>
				<div style={{width:"100%"}}>
					<h2>
						contact <span>us</span>
					</h2>
					<div>
						<Contacts />
						<Form />
					</div>
				</div>
			</Container>
		</footer>
	);
}

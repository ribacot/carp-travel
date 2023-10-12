import Background from "../../background/backgroun";
import ChooseDescription from "../chooseDescription/chooseDescription";
import ChooseForm from "../chooseForm/chooseForm";
import backgroundImage from "@/app/img/section_bacground/choose.png";
import Section from "../../section/section";
import css from "../choose.module.css";
// import css from "./chooseTablet.module.css";

export default function ChooseTablet() {
	return (
		<div className={css.wrapperTablet}>
			<Section id="career" title="choose" span="us" style={css.chooseSection}>
				<Background url={backgroundImage} />
					<div className={css.vrapperDescription}>
						<p className={css.description}>
							Your chance to join our passionate team in Carpathian tourism. Seeking
							talented professionals to share our common mission.
						</p>
					</div>
					<h3 className={css.titleWhy}>Why us ?</h3>
					<div style={{ display: "flex", justifyContent: "space-between" ,gap:"20px"}}>
						<ChooseDescription />
						<ChooseForm />
					</div>
			</Section>
		</div>
	);
}

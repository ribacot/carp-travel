import Background from "../background/backgroun";
import ChooseDescription from "./chooseDescription/chooseDescription";
import ChooseForm from "./chooseForm/chooseForm";
import backgroundImage from "@/app/img/section_bacground/choose.png";
import Section from "../section/section";

import css from "./choose.module.css";

export default function ChooseMobail() {
	return (
		// <div className={css.wrapperMobail}>
		<>			<Section id="career" title="choose" span="us" style={css.wrapperMobail}>
		<Background url={backgroundImage} />
		<div className={css.vrapperDescription}>
			<p className={css.description}>
				Your chance to join our passionate team in Carpathian tourism. Seeking
				talented professionals to share our common mission.
			</p>
		</div>
		<h3 className={css.titleWhy}>Why us ?</h3>
		<ChooseDescription />
	</Section>
	<Section style={css.wrapperMobail}>
		<Background url={backgroundImage} />
		<ChooseForm />
	</Section>
</>
		// </div>
	);
}

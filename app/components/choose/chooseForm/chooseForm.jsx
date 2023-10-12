import Form from "../../form/form";
import css from "./chooseForm.module.css";
export default function ChooseForm() {
	return (
		<>
			<div className={css.wrapper}>
				<p className={css.descriptinForm}>
					Don&apos;t miss your opportunity! Fill out the form right now and join our team!
				</p>
				<Form isActive={true} />
			</div>
		</>
	);
}

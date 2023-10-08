import { listSkills } from "@/app/components/choose/listSkills";
import css from "./chooseDescription.module.css";

export default function ChooseDescription() {
	return (
		<ul className={css.listDescriptions}>
			{listSkills.map(({ title, description }) => (
				<li key={title}>
					<div>
						<h4>{title}</h4>
						<p className={css.description}>{description}</p>
					</div>
				</li>
			))}
		</ul>
	);
}

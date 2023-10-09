import Image from "next/image";
import css from "./weOfferItem.module.css";
import ListOffers from "../listOffers/listOffers";
export default function WeOfferItem({ item, chengeCard, numItem }) {
	const { img, tagline, description, title } = item;
	return (
		<div className={css.wrapperItem}>
			<Image className={css.img} src={img} alt={title} />
      <ListOffers
						style={css.activeDesctop}
						onClick={chengeCard}
						numItem={numItem}
						tagline={tagline}
					/>

			<div className={css.decor}>
				<p className={css.titleExemple}>{tagline}</p>
        <ListOffers
						style={css.activeTablet}
						onClick={chengeCard}
						numItem={numItem}
						tagline={tagline}
					/>


					<p className={css.descriptionOffer}>{description}</p>
			</div>
		</div>
	);
}

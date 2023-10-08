import Image from "next/image";
import css from "./weOfferItem.module.css";
import ListOffers from "../listOffers/listOffers";
export default function WeOfferItem({ item, chengeCard, numItem }) {
  const { img, tagline, description, title } = item;
  return (
    <div className={css.wrapperItem}>
      <Image className={css.img} src={img} alt={title} />

      <p className={css.titleExempleMobile}>{tagline}</p>
      <div className={css.decor}>
        <ListOffers
          style={css.activTablet}
          onClick={chengeCard}
          numItem={numItem}
          tagline={tagline}
        />

        <p>{description}</p>
      </div>
    </div>
  );
}

// width={280} height={213}

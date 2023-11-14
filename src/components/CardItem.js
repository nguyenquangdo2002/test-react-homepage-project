import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="tokyo" className="cards__item__img" />
            <h1 className="cards__item__text-h1"></h1>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

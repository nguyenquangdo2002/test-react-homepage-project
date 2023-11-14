import React from "react";
import { Link } from "react-router-dom";

function CardItemService(props) {
  const { src, text, city } = props;
  return (
    <>
      <li className="cards__item__service">
        <Link className="cards__item__link__service">
          <figure className="cards__item__pic-wrapper-service">
            <img className="cards__item__img" src={src} />
          </figure>
          <h5 className="cards__item__text">{text}</h5>
          <div className="cards__item__desc">{city}</div>
        </Link>
      </li>
    </>
  );
}

export default CardItemService;

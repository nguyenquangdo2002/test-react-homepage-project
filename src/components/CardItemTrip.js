import React from "react";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

function CardItemTrip(props) {
  const { path, label, src, text, city, rating, review, day } = props;
  return (
    <>
      <li className="cards__item__trip">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrapper" data-category={label}>
            <img className="cards__item__img" src={src} />
          </figure>
          <div className="cards__item__info">
            <div className="cards__item__text">{text}</div>
            <div className="cards__item__city">{city}</div>
            <div className="cards__item__rating">
              <span className="cards__item__rating rating">
                {rating}
                <div className="cards__item__rating review">{review}</div>
              </span>
              <span className="cards__item__rating day">
                <MdAccessTime />
                <p>{day}</p>
              </span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemTrip;

import React from "react";
import { Link } from "react-router-dom";
import "./CardItemReview.css";

function CardItemReview(props) {
  const { path, label, src, title } = props;

  return (
    <li className="cards__item__review">
      <Link className="cards__item__link__review" to={path}>
        <figure
          className="cards__item__pic-wrapper-review"
          data-category={label}
        >
          <img className="cards__item__img-review" src={src} alt={label} />

          {/* <span className="cards__item__rating rating">{rating}</span> */}
          <div className="cards__item__title-review">
            <p>{title}</p>
          </div>
          <div className="cards__item__rating-review">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </figure>
      </Link>
    </li>
  );
}

export default CardItemReview;

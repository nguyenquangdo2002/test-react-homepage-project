import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CardItemAT(props) {
  const { path, date, title, text, herf, src } = props;
  return (
    <>
      <li className="cards__item__AT">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrapper-AT">
            <img className="cards__item__img" src={src} />
          </figure>
          <div className="cards__item__info-AT">
            <div className="cards__item__date">{date}</div>

            <div className="cards__item__title">{title}</div>
            <div className="cards__item__text-AT">{text}</div>
            <div className="cards__item__herf">
              <span>{herf}</span>
              &nbsp;
              <span className="arrow-right">
                <ArrowForwardIosIcon />
              </span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemAT;

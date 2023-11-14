import React from "react";
import "./CardItemOverlay.css";
function CardItemOverlay(props) {
  const { src, title, launch } = props;
  return (
    <div className="overlay">
      <div className="overlay-title">{title}</div>
      <a href="#">
        <img className="overlay-img" src={src} alt="" width={144} height={80} />
        <div className="overlay-btn">{launch}</div>
      </a>
    </div>
  );
}

export default CardItemOverlay;

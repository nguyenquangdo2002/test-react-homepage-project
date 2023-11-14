import React from "react";
import "./CardItemOverlay.css";
import CardItemOverlay from "./CardItemOverlay";

function CardOverlay() {
  return (
    <div className="card-overlay">
      <CardItemOverlay
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
        title="Center menu + 2menus"
        launch="Launch"
      />

      <CardItemOverlay
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
        title="Demoaaaaaaaaaaaa"
        launch="Launch"
      />
    </div>
  );
}

export default CardOverlay;

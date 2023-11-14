import React from "react";
import "./Cards.css";
import "./CardItemTrip.css";
import "./CardItemService.css";
import CardItemService from "./CardItemService";

function CardsService() {
  return (
    <>
      <ul className="cards__items__service">
        <CardItemService
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
          text="Handpicked Hotels"
          city="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
        />
        <CardItemService
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
          text="World Class Service"
          city="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
        />
        <CardItemService
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
          text="Best Price Guarantee"
          city="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
        />
      </ul>
    </>
  );
}

export default CardsService;

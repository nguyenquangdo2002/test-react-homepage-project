import React from "react";
import "./Cards.css";
import Banner from "./Banner";

import CardItem from "./CardItem";
import CardsTrip from "./CardsTrip";
import CardAT from "./CardAT";
import CardService from "./CardService";
function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Popular Destinations</h1>
        <p>World's best tourist destinations</p>
        <div className="cards__container">
          <ul className="cards__items">
            <CardItem
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy.jpg"
              label="Tokyo"
            />
            <CardItem
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488.jpg"
              label="Seoul"
            />
            <CardItem
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4.jpg"
              label="Paris"
            />
            <CardItem
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1.jpg"
              label="Londo"
            />
          </ul>
        </div>
      </div>
      <div className="cards">
        <h1>Best Value Trips</h1>
        <p>Best offers trips from us</p>
        <div className="cards__container__trip">
          <CardsTrip />
        </div>
      </div>
      <div className="cards">
        <h1>Why Choose Us</h1>
        <div className="cards__p-service">
          Here are reasons you should plan trip with us
        </div>
        <div className="cards__container__service">
          <CardService />
        </div>
      </div>
      <Banner />

      <div className="cards">
        <h1>Articles & Tips</h1>
        <p>Explore some of the best tips from around the world</p>
        <div className="cards__container__AT">
          <CardAT />
        </div>
      </div>
    </>
  );
}

export default Cards;

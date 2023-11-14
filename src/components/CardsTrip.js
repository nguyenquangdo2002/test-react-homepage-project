import React from "react";
import "./Cards.css";
import "./CardItemTrip.css";
import CardItemTrip from "./CardItemTrip";

function CardsTrip() {
  return (
    <>
      <ul className="cards__items_trip">
        <CardItemTrip
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
          text="French Autumn"
          label="$5,000"
          path="/services"
          city="City Tours, Urban"
          rating={
            <>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </>
          }
          review="10 review"
          day="6 days"
        />
        <CardItemTrip
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
          text="Grand Switzerland"
          label="$6,000"
          path="/services"
          city="Shopping, Mountain, Snow & Ice"
          rating={
            <>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </>
          }
          review="8 review"
          day="6 days"
        />
        <CardItemTrip
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
          text="Discover Japan"
          label="$3,000 $2,500"
          path="/services"
          city="City Tours, Iconic"
          rating={
            <>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </>
          }
          review="7 review"
          day="10 days"
        />
      </ul>
      <ul className="cards__items"></ul>
    </>
  );
}

export default CardsTrip;

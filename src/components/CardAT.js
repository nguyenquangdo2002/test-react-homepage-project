import React from "react";
import CardItemAT from "./CardItemAT";
import "./CardItemAT.css";

function CardAT() {
  return (
    <>
      <ul className="cards__items_AT">
        <CardItemAT
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
          date="DECEMBER 10, 2016"
          title="Memorial Day to Someone Told Me to Travel"
          text="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          herf="Read More"
        />
        <CardItemAT
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
          date="DECEMBER 10, 2016"
          title="Memorial Day to Someone Told Me to Travel"
          text="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          herf="Read More"
        />
        <CardItemAT
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
          date="DECEMBER 10, 2016"
          title="Memorial Day to Someone Told Me to Travel"
          text="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          herf="Read More"
        />
      </ul>
    </>
  );
}

export default CardAT;

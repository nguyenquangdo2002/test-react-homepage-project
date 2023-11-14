// NewSidebar.js

import React from "react";
import "./NewSidebar.css";
import CardOverlay from "./CardOverlay";
import CardOverlayplus from "./CardOverlayplus";

function NewSidebar() {
  return (
    <div className="parent-container">
      <div id="new-sidebar" className="new-sidebar">
        <div className="new-sidebar-container">
          <div className="container-row12">
            <div className="container-title">Created With Grand Tour</div>
            <div className="container-p">
              We designed Grand Tour theme to make it works especially for tour
              & travel site. Here are a few included examples that you can
              import with one click.
            </div>
          </div>
          <div className="container-row3">
            <CardOverlay />
          </div>
          <div className="container-title">Predefined Colors</div>

          <div className="container-row4">
            <div className="color-red"></div>
            <div className="color-red"></div>
            <div className="color-red"></div>
            <div className="color-red"></div>
            <div className="color-red"></div>
            <div className="color-red"></div>
            <div className="color-red"></div>
          </div>
          <div className="container-title">Predefined Stylings</div>
          <CardOverlayplus />
        </div>
      </div>
    </div>
  );
}

export default NewSidebar;

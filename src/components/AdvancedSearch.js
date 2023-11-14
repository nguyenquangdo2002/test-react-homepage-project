import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaCalendarAlt } from "react-icons/fa";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import "./AdvancedSearch.css";
import "./HeroSection.css";
function AdvancedSearch() {
  return (
    <>
      <div className="hero-container-advanced">
        <div className="hero-content-advanced">
          <div className="hero-btns inpbtn">
            <div className="hero-select-month">
              <select className="input month" id="icon">
                <option selected value="1">
                  All Categories
                </option>
                <option value="2">Mountain</option>
                <option value="3">Rural</option>
                <option value="4">Snow & Ice</option>
                <option value="5">Wildlife</option>
              </select>
            </div>
            <select className="input select" id="destinationSelect">
              <option selected value="1">
                Any Destinations
              </option>
              <option value="Toxyo">Toxyo</option>
              <option value="Seoul">Seoul</option>
              <option value="Paris">Paris</option>
              <option value="London">London</option>
              <option value="Venice">Venice</option>
              <option value="Miami">Miami</option>
              <option value="Rome">Rome</option>
              <option value="Prague">Prague</option>
              <option value="California">California</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Santorin">Santorin</option>
            </select>

            <div className="hero-search">
              <input
                className="input search"
                type="search"
                placeholder="Max oudget ex. 500"
              />
              <span className="search-icon">
                <AttachMoneyIcon className="advance-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedSearch;

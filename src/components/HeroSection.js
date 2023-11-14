import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "./Button";
import { FaCalendarAlt } from "react-icons/fa";
import "./HeroSection.css";
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import AdvancedSearch from "./AdvancedSearch";
function HeroSection() {
  const [click, setClick] = useState(false);
  const handleClickAdvanced = () => {
    setClick(!click);
  };
  return (
    <>
      <Navbar />
      <Navbarside />

      <div className="hero-container">
        <video
          src="../video/SnapSave.io-Spectacular Norway - from the air-(1080p).mp4"
          autoPlay
          loop
          muted
        />

        <div className="hero-content">
          <h1 className="hero-content-h1">Where do you want to go?</h1>
          <p className="hero-content-p">
            Trips, experiences, and places. All in one service
          </p>
          <div className="hero-btns inpbtn">
            <div className="hero-search">
              <input
                className="input search"
                type="search"
                placeholder="Destination, city"
              />
              <span>
                <FontAwesomeIcon
                  icon={faSearch}
                  id="icon"
                  className="search-icon"
                />
              </span>
            </div>
            <div className="hero-select-month">
              <select className="input month" id="icon">
                <option selected value="1">
                  Any Month
                </option>
                <option value="2">January</option>
                <option value="3">February</option>
                <option value="4">March</option>
                <option value="5">April</option>
                <option value="6">May</option>
                <option value="7">June</option>
                <option value="8">July</option>
                <option value="9">August</option>
                <option value="10">September</option>
                <option value="11">October</option>
                <option value="12">November</option>
                <option value="13">December</option>
              </select>
              <span>
                <FaCalendarAlt className="select-icon-month" id="icon" />
              </span>
            </div>
            <select className="input select" id="">
              <option selected value="1">
                Sort By Date
              </option>
              <option value="2">Price Low To High</option>
              <option value="3">Price High To Low</option>
              <option value="4">Sort By Name</option>
              <option value="5">Sort By Popularity</option>
              <option value="6">Sort By Review Score</option>
            </select>

            <Button
              className="btn"
              buttonStyle="btn--primary"
              buttonSize="btn-medium"
              type="submit"
            >
              Search
            </Button>
          </div>
          {click && <AdvancedSearch />}
          <div className="advance-search" onClick={handleClickAdvanced}>
            <KeyboardArrowDownIcon className="advance-icon" />
            <span>Advanced Search</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

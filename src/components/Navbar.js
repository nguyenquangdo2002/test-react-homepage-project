import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CardItemReview.css";
import CardItemReview from "./CardItemReview";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img
              className="navbar-logo"
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
              alt="logo"
            />
          </Link>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Home 1 - Background Image</a>
                </li>
                <li>
                  <a href="#">Home 2 - Youtube Video</a>
                </li>
                <li>
                  <a href="#">Home 3 - Google Inspired </a>
                </li>
                <li>
                  <a href="#">Home 4 - Travel Site</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Tours &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Classic Sidebar</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Grid Fullwidth</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Grid Sidebar</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour List Sidebar</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Header Type</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Categories</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/Booking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Booking &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <div className="menu-child">
                    <a href="#">Online Payment for Booking</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Custom Booking Form</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Tour Durations</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Custom Booking URL for Affiliate Tour</a>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Custom Booking using custom HTML & Shortcode</a>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Header Options</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu-child">
                    <a href="#">Layout Options</a>
                    <KeyboardArrowRightIcon className="arrow-right-icon" />
                    <ul>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                      <li>
                        <a className="a" href="#">
                          aaaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/Destinations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Destinations &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Destination Fullwidth</a>
                </li>
                <li>
                  <a href="#">Destination + Video Header</a>
                </li>
                <li>
                  <a href="#">Destination Right Sidebar </a>
                </li>
                <li>
                  <a href="#">Destination Left Sidebar</a>
                </li>
                <li>
                  <a href="#">Single Destination</a>
                </li>
                <li>
                  <a href="#">Single Destination + Video</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Pages" className="nav-links" onClick={closeMobileMenu}>
                Pages &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQS </a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Page Fullwidth</a>
                </li>
                <li>
                  <a href="#">Page + Video Background Header</a>
                </li>
                <li>
                  <a href="#">Page Right Sidebar</a>
                </li>
                <li>
                  <a href="#"> Page Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Blog" className="nav-links" onClick={closeMobileMenu}>
                Blog &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Fullwidth</a>
                </li>
                <li>
                  <a href="#">Blog Grid Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Grid Left Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Grid Fullwidth</a>
                </li>
                <li>
                  <a href="#">Blog Full + Grid Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Full + Grid Left Sidebar</a>
                </li>
                <li>
                  <a href="#">Blog Full + Grid Fullwidth</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/Shortcodes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shortcodes &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Accordion & Toggles</a>
                </li>
                <li>
                  <a href="#">Alert Boxes</a>
                </li>
                <li>
                  <a href="#">Animated Content</a>
                </li>
                <li>
                  <a href="#">Buttons & Social Icons</a>
                </li>
                <li>
                  <a href="#">Columns</a>
                </li>
                <li>
                  <a href="#">Google Maps</a>
                </li>
                <li>
                  <a href="#">Image Frame & Animation</a>
                </li>
                <li>
                  <a href="#">Image Teasers</a>
                </li>
                <li>
                  <a href="#">Pricing Tables</a>
                </li>
                <li>
                  <a href="#">Tabs</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-links" onClick={closeMobileMenu}>
                Shop &nbsp;
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Shop Fullwidth</a>
                </li>
                <li>
                  <a href="#">Shop Sidebar</a>
                </li>
                <li>
                  <a href="#">Single Product Fullwidth</a>
                </li>
                <li>
                  <a href="#">Single Product With Sidebar</a>
                </li>
              </ul>
            </li>
            <li className="nav-item reviewspic1">
              <Link
                to="/reviews"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <CardItemReview
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729.jpeg"
                  label="$5,000"
                  title="French Autumn"
                />
                <span>
                  <div className="cards">
                    <h1>Articles & Tips</h1>
                    <p>Explore some of the best tips from around the world</p>
                    <div className="cards__container__review">
                      <ExpandMoreIcon />
                    </div>
                  </div>
                </span>
              </Link>
            </li>
            <li className="nav-item reviewspic1">
              <Link
                to="/reviews"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <CardItemReview
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                  label="$5,000"
                  title="French Autumn"
                />
                <span>
                  <ExpandMoreIcon />
                </span>
              </Link>
            </li>
            <li className="nav-item reviewspic1">
              <Link
                to="/reviews"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div class="socialmedia-icons">
                  <Link
                    class="socialmedia-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link
                    class="socialmedia-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <i class="fab fa-twitter" />
                  </Link>
                  <Link
                    class="socialmedia-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <i class="fab fa-youtube" />
                  </Link>

                  <Link
                    class="socialmedia-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i class="fab fa-linkedin" />
                  </Link>
                  <Link
                    class="socialmedia-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i class="fab fa-instagram" />
                  </Link>
                </div>
              </Link>
            </li>
          </ul>
          <div className=" nav-links menu-icon-right">
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              onClick={handleClick}
            />
          </div>
          <div className=" nav-links menu-icon-right-cart">
            <i className="fa fa-shopping-cart" />
            <span className="nav-links cart-count">0</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

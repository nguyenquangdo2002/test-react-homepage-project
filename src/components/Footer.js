import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Our Awards</h2>
            <div className="footer-text" to="/sign-up">
              London is a megalopolis of people, ideas and frenetic energy. The
              capital and largest city of the United Kingdom.
            </div>
            <Link to="/">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                width={246}
                height={113}
                alt=""
              />
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Info</h2>
            <div className="contact-info" to="/">
              <FaMobileAlt /> 1-567-124-44227
            </div>
            <div className="contact-info">
              <MdLocationOn /> 184 Main Street East Perl Harbour 8007
            </div>
            <div className="contact-info" to="/">
              <MdAccessTime /> Mon - Sat 8.00 - 18.00 Sunday CLOSED
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
            </div>
          </div>
          <div class="footer-link-items">
            <h2>Recent Trips</h2>
            <div class="social-icons">
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
              <Link class="social-icon-link" to="/">
                <img
                  loading="lazy"
                  src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                  width={125.75}
                  height={125.75}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="Copyright">
              © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
            </Link>
          </div>
          <div className="link-nav">
            <Link>Home</Link>
            <Link>Tours</Link>
            <Link>Blog</Link>
            <Link>Purchase</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../style/navbar.css";

class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="artistsSection"
              spy={true}
              smooth={true}
              //offset={-70}
              duration={500}
            >
              Artists
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="shopSection"
              spy={true}
              smooth={true}
              //offset={-70}
              duration={500}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="podcastsSection"
              spy={true}
              smooth={true}
              //offset={-70}
              duration={500}
            >
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="eventSection"
              spy={true}
              smooth={true}
              //offset={-70}
              duration={500}
            >
              Events
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;

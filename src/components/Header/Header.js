import React from "react";

import Blob from "../../assets/Blob.png";
import Separator from "../../assets/separator.svg";
import Logo from "../../assets/logoo.png";
import { Link } from "react-scroll";

const Header = ({ setActive }) => {

  return (
    <div>
      <header>
        <section className="navigation">
          <ul className="navigation-left" style={{ cursor: "pointer" }}>
            <li className="navigation-item">
              <Link to="home">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="about">About Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="services">Services</Link>
            </li>
          </ul>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="navigation-right" style={{ cursor: "pointer" }}>
            <li className="navigation-item">
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li className="navigation-item">
              <Link to="contact us">Contact Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="support">Support</Link>
            </li>
            <li className="navigation-item">
              <Link to="registration">Login</Link>
            </li>
          </ul>
        </section>

        <section className="navigation-sm">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <button className="close-menu">X</button>

          <ul className="navigation-items">
            <li className="navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="navigation-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="navigation-item">
              <Link to="/contact us">Contact Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="/support">Support</Link>
            </li>
            <li className="navigation-item">
              <Link to="/registration">Login</Link>
            </li>
          </ul>
        </section>
        <section className="hero">
          <div className="carousel">
            <div className="slide slide-1">
              <div className="slide-left">
                <h2 className="slide-title">A Venture with Passion</h2>
                <p className="slide-text">
                  Continually whiteboard viral ROI with functional e-services.
                  Enthusiastically fabricate equity invested communities rather
                  than cross-media markets.
                </p>
                <button className="slide-cta">Get quote</button>
              </div>
              <div className="slide-right">
                <img src={Blob} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="curve">
          <img src={Separator} alt="" />
        </section>
      </header>
    </div>
  );
};

export default Header;

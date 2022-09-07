import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Blob from "../../assets/Blob.png";
import Separator from "../../assets/separator.svg";
import Logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";

const Header = ({ setActive }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <header>
        <section className="navigation">
          <ul className="navigation-left" style={{ cursor: "pointer" }}>
            <li className="navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/gallery">About Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="/gallery">Services</Link>
            </li>
          </ul>
          <div className="logo" style={{ cursor: "pointer" }}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="navigation-right" style={{ cursor: "pointer" }}>
            <li className="navigation-item">
              <Link to="/gallery">Portfolio</Link>
            </li>
            <li className="navigation-item">
              <Link to="/contact us">Contact Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="/footer">Support</Link>
            </li>
            <li className="navigation-item">
              <Link to="/registration">Login</Link>
            </li>
          </ul>
        </section>
        <button
          className="close-menu"
          onClick={() => setShow(!show)}
          style={{ color: "black", cursor:'pointer' }}
        >
          {" "}
          <FaBars />
        </button>
        {show ? (
          <section className="navigation-sm">
            <div className="logo" style={{ cursor: "pointer" }}>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>

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
                <Link to="/gallery">Portfolio</Link>
              </li>
              <li className="navigation-item">
                <Link to="/gallery">Contact Us</Link>
              </li>
              <li className="navigation-item">
                <Link to="/footer">Support</Link>
              </li>
              <li className="navigation-item">
                <Link to="/registration">Login</Link>
              </li>
            </ul>
          </section>
        ) : null}
        <section className="hero">
        
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
     
        </section>
        <section className="curve">
          <img src={Separator} alt="" />
        </section>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "../assets/logoo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <section className="navigation">
          <ul className="navigation-left" style={{ cursor: "pointer" }}>
            <li className="navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="navigation-item">
              <Link to="/services">Services</Link>
            </li>
          </ul>
          <div className="logo" style={{ cursor: "pointer" }}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            {/* <img src={Logo} alt="" /> */}
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
        <section className="navigation-sm">
          <div className="logo" style={{ cursor: "pointer" }}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            {/* <img src={Logo} alt="" /> */}
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
      </header>
    </div>
  );
};

export default Navbar;

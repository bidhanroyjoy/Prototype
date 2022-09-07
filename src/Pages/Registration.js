import React from "react";
import "./Registration.css";
import logos from "../assets/Logo.png";
import mailvector from "../assets/mail-vector.svg";
import mobilevector from "../assets/mobile-vector.svg";
import officebuildingvector from "../assets/office-building-vector.svg";
import accountvector from "../assets/account-vector.svg";
import clipresearch from "../assets/clip-research 1.png";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logos} alt="" />
      </div>
      <div className="registration">
        <div className="registration-media">
          <img src={clipresearch} alt="" />
          <p className="registration-signup">
            Already have an Account? <Link to="#">Login</Link>
          </p>
        </div>
        <div className="registration-wrapper">
          <h3 className="registration-title">Create a New Account</h3>
          <hr className="section-break" />
          <div className="registration-input-wrapper">
            <div className="registration-input-organization">
              <div className="input">
                <input
                  type="radio"
                  id="registration-individual"
                  name="registration-type"
                  value="individual"
                />
                <label for="registration-type">Individual</label>
              </div>
              <div className="input">
                <input
                  checked
                  type="radio"
                  id="registration-organization"
                  name="registration-type"
                  value="organization"
                />
                <label for="registration-type">Institute/Organization</label>
              </div>
            </div>
            <div className="registration-input">
              <label for="first-name">
                Name <span className="required">*</span>
              </label>
              <img className="icon" src={accountvector} alt="" />
              <input
                className="input"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Type your full name here"
              />
            </div>
            <div className="registration-input">
              <label for="institute-type">
                Type of Institution/Organization{" "}
                <span className="required">*</span>
              </label>
              <img className="icon" src={officebuildingvector} alt="" />
              <select
                className="input"
                name="institute-type"
                id="institute-type"
              >
                <option value="none" selected disabled>
                  Choose one
                </option>
                <option value="government">Government</option>
                <option value="semigovernment">Semi Government</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="registration-input">
              <label for="institute-select">
                Institution/Organization <span className="required">*</span>
              </label>
              <img className="icon" src={officebuildingvector} alt="" />
              <select
                className="input"
                name="institute-select"
                id="institute-select"
              >
                <option value="none" selected disabled>
                  Choose one
                </option>
                <option value="mpa">Ministry Of Public Administration</option>
                <option value="mf">Ministry Of Finance</option>
                <option value="mlg">Ministry Of Local Government</option>
                <option value="mfa">Ministry Of Foriegn Affairs</option>
              </select>
            </div>
            <div className="registration-input">
              <label for="mobile-number">
                Mobile Number<span className="required">*</span>
              </label>
              <img className="icon" src={mobilevector} alt="" />
              <input
                className="input"
                type="tel"
                name="mobile-number"
                id="mobile-number"
                placeholder="Type your 11-digit Mobile Phone Number"
              />
            </div>
            <div className="registration-input">
              <label for="email-address">Email Address</label>
              <img className="icon" src={mailvector} alt="" />
              <input
                className="input"
                type="tel"
                name="email-address"
                id="email-address"
                placeholder="Type your email address"
              />
            </div>
            <div className="registration-input-declaration">
              <input
                type="checkbox"
                id="declaration"
                name="declaration"
                value="1"
              />
              <label for="declaration">
                {" "}
                I agree to the <Link to="#">Terms of Use</Link> and{" "}
                <Link to="#">Privacy Policy</Link>
              </label>
            </div>
            <button className="registration-submit">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React from 'react'
import Separator from '../assets/Separator-bottom.svg'
import Email from '../assets/Email-Icon.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
         <section class="team">
            <div class="team-badge">
                <h1 class="team-badge-text">BEST TEAM</h1>
            </div>
           <div class="team-overlay">
                <img class="curve-bottom" src={Separator} alt="" />
                <div class="team-content">
                    <h3>An Awesome Team</h3>
                    <p>Rapidiously actualize client-based products before out-of-the-box leadership skills.</p>
                </div>
                <div class="footer">
                    <div class="subscription">
                        <h2 class="subscription-text">Newsletter</h2>
                        <div class="subscription-input">
                            <img src={Email} alt="" />
                            <input type="text" placeholder="Email Address" />
                            <button>Subscribe</button>
                        </div>
                        <p class="subscription-footer">We will send occasional newsletter to keep you informed</p>
                    </div>
                    <div class="footer-nav">
                        <p>© 2022 Awesome Company Inc.</p>
                        <ul class="footer-nav-items">  
                            <li class="footer-nav-item"><Link to="#">Home</Link></li>
                            <li class="footer-nav-item"><Link to="#">Privacy Policy</Link></li>
                            <li class="footer-nav-item"><Link to="#">Disclaimer</Link></li>
                            <li class="footer-nav-item"><Link to="#">Contact us</Link></li>
                        </ul>
                        <ul class="footer-nav-social">
                            <li class="footer-nav-social-item">
                                <img src={Facebook} alt="" /> 
                            </li>
                            <li class="footer-nav-social-item">
                                <img src={Twitter} alt="" />
                            </li>
                            <li class="footer-nav-social-item">
                                <img src={LinkedIn} alt="" />
                            </li>
                            <li class="footer-nav-social-item">
                                <p>Follow us</p>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
        </section>
    </div>
  )
}

export default Footer
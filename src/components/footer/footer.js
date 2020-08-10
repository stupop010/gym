import React from "react"
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./footer.scss"
import SocialLinks from "../socialLinks/socialLinks"

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact-us">
        <div>
          <ul>
            <li className="contact-us-details">
              <div className="contact-us-icon map">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <p>
                333 Middle Winchendon Rd, Rindge,
                <br /> NH 03461
              </p>
            </li>
            <li className="contact-us-details">
              <div className="contact-us-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <p>125-711-811 125-668-886</p>
            </li>
            <li className="contact-us-details">
              <div className="contact-us-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>Support@gym.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div>
          <div className="footer-flex">
            <div>
              <h6>
                gy<span>m</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua endisse
                ultrices gravida lorem.
              </p>
              <SocialLinks />
            </div>
            <div>
              <h3>Useful links</h3>
              <ul className="useful-links">
                <li>About</li>
                <li>Blog</li>
                <li>Classes</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="copyright">
            Copyright &copy;2020 All rights reserved | Stuart Doney
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

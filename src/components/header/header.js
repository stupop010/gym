import React from "react"
import { Link } from "gatsby"
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./header.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <h2>
          GY<span>M</span>
        </h2>
        <ul className="nav-list">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about-us">about us</Link>
          </li>
          <li>classes</li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>our team</li>
          <li>pages</li>
          <li>contact</li>
        </ul>
        <ul className="nav-social">
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

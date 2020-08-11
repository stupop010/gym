import React, { useState } from "react"
import { Link } from "gatsby"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Menu from "../menu"

import "./header.scss"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleOpenMenu = () => {
    document.body.classList.add("menu-open")
    setToggleMenu(true)
  }

  const handleCloseMenu = () => {
    document.body.classList.remove("menu-open")
    setToggleMenu(false)
  }

  const Socials = () => (
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
  )

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
          <li>
            <Link to="/classes">classes</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/team">our team</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <Socials />
        <div className="hamburger" onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <Menu
        toggleMenu={toggleMenu}
        handleCloseMenu={handleCloseMenu}
        socials={Socials}
      >
        <Socials />
      </Menu>
    </header>
  )
}

export default Header

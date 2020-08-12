import React from "react"
import { Link } from "gatsby"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./menu.scss"

const Menu = ({ toggleMenu, handleCloseMenu, children }) => {
  return (
    <>
      {toggleMenu && (
        <div className="menu-container">
          <div className={toggleMenu ? "menu open" : "menu"}>
            <div className="menu-close" onClick={handleCloseMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="menu-links">
              <li onClick={handleCloseMenu}>
                <Link to="/">home</Link>
              </li>
              <li onClick={handleCloseMenu}>
                <Link to="/about-us">about us</Link>
              </li>
              <li onClick={handleCloseMenu}>
                <Link to="/classes">classes</Link>
              </li>
              <li onClick={handleCloseMenu}>
                <Link to="/services">services</Link>
              </li>
              <li onClick={handleCloseMenu}>
                <Link to="/team">our team</Link>
              </li>
              <li onClick={handleCloseMenu}>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <div className="menu-social">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu

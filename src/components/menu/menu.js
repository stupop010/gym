import React from "react"
import { Link } from "gatsby"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./menu.scss"

const Menu = ({ toggleMenu, handleCloseMenu, children }) => {
  console.log(toggleMenu)
  return (
    <>
      {toggleMenu && (
        <div className="menu-container">
          <div className="menu">
            <div className="menu-close" onClick={handleCloseMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="menu-links">
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
            <div className="menu-social">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu

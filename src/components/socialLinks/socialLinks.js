import React from "react"
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./socialLinks.scss"

const SocialLinks = () => {
  return (
    <ul className="social-links">
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
      <li>
        <FontAwesomeIcon icon={faEnvelope} />
      </li>
    </ul>
  )
}

export default SocialLinks

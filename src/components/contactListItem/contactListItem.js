import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./contactListItem.scss"

const ContactListItem = ({ children, icon, iconColor, iconBg }) => (
  <li className="contact-us-details">
    <div
      className="contact-us-icon map"
      style={{ color: iconColor, backgroundColor: iconBg }}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
    <p>{children}</p>
  </li>
)

export default ContactListItem

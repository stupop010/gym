import React from "react"
import { Link } from "gatsby"

import "./ourTeamTitle.scss"

const OurTeamTitle = () => {
  return (
    <div className="team-title">
      <div>
        <h5>our team</h5>
        <h3>train with experts</h3>
      </div>
      <Link to="/">appointment</Link>
    </div>
  )
}

export default OurTeamTitle

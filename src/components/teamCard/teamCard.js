import React from "react"
import Img from "gatsby-image"

import "./teamCard.scss"

const TeamCard = ({ img, name, children }) => {
  return (
    <div className="trainer">
      <Img fluid={img} className="slide" />
      <div className="trainer-txt">
        <div>
          <h5>{name}</h5>
          <p>gym trainer</p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TeamCard

import React from "react"

import "./sectionTitle.scss"

const SectionTitle = ({ title, smallTxt }) => (
  <div className="section-title">
    <p>{smallTxt}</p>
    <h2>{title}</h2>
  </div>
)

export default SectionTitle

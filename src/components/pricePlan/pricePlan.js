import React from "react"

import "./pricePlan.scss"
import SectionTitle from "../sectionTitle"

const PricePlan = () => {
  const Card = ({ price, monthly }) => {
    return (
      <div className="price-card">
        <h4>{monthly}</h4>
        <h3>£{price}</h3>
        <ul>
          <li>Free riding</li>
          <li>Unlimited equipment</li>
          <li>Weight losing classes</li>
          <li>Personal trainer</li>
          <li>No time restriction</li>
        </ul>
        <a>enroll now</a>
      </div>
    )
  }

  return (
    <section className="price">
      <div className="price-container">
        <SectionTitle smallTxt="our plan" title="choose your pricing plan" />
        <div className="price-card-container">
          <Card price="19.99" monthly="Monthly" />
          <Card price="199.99" monthly="12 Month unlimited" />
          <Card price="99.00" monthly="6 Month unlimited" />
        </div>
      </div>
    </section>
  )
}

export default PricePlan

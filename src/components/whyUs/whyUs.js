import React from "react"
import {
  faBiking,
  faAppleAlt,
  faDumbbell,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./whyUs.scss"

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-container">
        <div className="why-title">
          <p>why choose us?</p>
          <h2>push your limits forward</h2>
        </div>
        <div className="why-card-container">
          <div className="why-card">
            <div className="why-icon">
              <FontAwesomeIcon icon={faBiking} />
            </div>
            <h3>Modern equipment</h3>
            <p>
              Provides tailor-made services to its esteemed members suffering
              from injuries or muscular pain.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <FontAwesomeIcon icon={faAppleAlt} />
            </div>
            <h3>Healthy nutrition plan</h3>
            <p>
              A nutrition plan to achieve weight lose, muscle gains or weight
              gain.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <FontAwesomeIcon icon={faDumbbell} />
            </div>
            <h3>Training plan</h3>
            <p>A Professional training plan to achieve your goals.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <FontAwesomeIcon icon={faHeartbeat} />
            </div>
            <h3>Unique to your needs</h3>
            <p>
              Provides tailor-made services to its esteemed members suffering
              from injuries or muscular pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

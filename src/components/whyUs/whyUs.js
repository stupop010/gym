import React from "react"
import {
  faBiking,
  faAppleAlt,
  faDumbbell,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./whyUs.scss"
import SectionTitle from "../sectionTitle"

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-container">
        <SectionTitle
          smallTxt="why choose us?"
          title="push your limits forward"
        />
        <div className="why-card-container">
          <div className="why-card">
            <div className="why-icon">
              <FontAwesomeIcon icon={faBiking} />
            </div>
            <h3>Modern equipment</h3>
            <p>
              Provides modern equipment. Up to date with machine and technique.
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

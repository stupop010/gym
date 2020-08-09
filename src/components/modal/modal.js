import React from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./modal.scss"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {children}
        </div>
      </section>
    </div>
  )
}

export default Modal

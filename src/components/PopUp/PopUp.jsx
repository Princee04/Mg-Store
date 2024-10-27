import React from "react"
import "./PopUp.css"

const PopUp = ({ title, confirm, denied, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4 className="popup-title">{title}</h4>
        <p className="popup-message">{children}</p>
        <div className="popup-buttons">
          <button className="popup-confirm" onClick={confirm}>
            Oui
          </button>
          <button className="popup-deny" onClick={denied}>
            Non
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp

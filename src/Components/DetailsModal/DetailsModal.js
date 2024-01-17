import React, { useEffect } from 'react'
import './DetailsModal.css'
import ReactDOM from 'react-dom'
function DetailsModal({ onHide, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 32) {
        onHide()
      }
      console.log(event)
    }
    window.addEventListener('keyup', checkKey)
    // return window.removeEventListener('keyup', checkKey)
  })
  return ReactDOM.createPortal(
    <div className="wrapper-modal active">
      <div className="card-detailModal">{children}</div>
    </div>,
    document.getElementById('delete-modal'),
  )
}

export default DetailsModal

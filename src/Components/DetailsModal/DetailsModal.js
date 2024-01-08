import React, { useEffect } from 'react'
import './DetailsModal.css'
import ReactDOM from 'react-dom'
function DetailsModal({ onHide }) {
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
      <div className="card-detailModal">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">اسم</th>
              <th scope="col">قیمت</th>
              <th scope="col">محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">لپتاپ</th>
              <td>12،000،000</td>
              <td>91%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.getElementById('delete-modal'),
  )
}

export default DetailsModal

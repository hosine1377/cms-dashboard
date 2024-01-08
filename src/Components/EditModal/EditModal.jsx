import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import './EditModal.css'
function EditModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 32) {
        onClose()
      }
      console.log(event)
    }
    window.addEventListener('keyup', checkKey)
    // return window.removeEventListener('keyup', checkKey)
  })
  return ReactDOM.createPortal(
    <div className="wrapper-modal active">
      <form className="edit-modal-form">
        <h1 className="edit-modal-title">اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="edite-form-submit" onClick={onSubmit}>
          ثبت اطلاعات جدید
        </button>
      </form>
    </div>,
    document.getElementById('delete-modal'),
  )
}

export default EditModal

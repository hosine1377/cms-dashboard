import './DeleteModal.css'
import ReactDOM from 'react-dom'
function DeleteModal({ submitAction, cancelAction }) {
  return ReactDOM.createPortal(
    <div className="wrapper-modal active ">
      <div className="card-deleteModal">
        <div className="body-deleteModal">
          <p>آیا از حذف اطمینان داری؟</p>
        </div>
        <div className="footer-deleteModal">
          <button
            className="deletModall-yes btn"
            onClick={() => submitAction()}
          >
            بله
          </button>
          <button className="deletModall-no btn" onClick={() => cancelAction()}>
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('delete-modal'),
  )
}

export default DeleteModal

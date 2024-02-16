import React, { useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import './Comments.css'
import { useEffect } from 'react'
import DetailsModal from '../DetailsModal/DetailsModal'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import { json } from 'react-router-dom'
function Comments() {
  const [allComments, setAllComments] = useState([])
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
  const [commentBody, setCommentBody] = useState('')
  const [mainCommentBody, setMainCommentBody] = useState('')
  const [commetID, setCommentID] = useState(null)
  useEffect(() => {
    getAllComment()
  }, [])
  function getAllComment() {
    fetch('https://dashbord-cms.liara.run/api/comments')
      .then((res) => res.json())
      .then((result) => setAllComments(result))
  }
  const closeDetailsModal = () => setShowDetailsModal(false)
  const closeDeleteModal = () => setIsShowDeleteModal(false)
  const closeEditModal = () => setIsShowEditModal(false)
  const closeAcceptodal = () => setIsShowAcceptModal(false)
  const deletComment = () => {
    console.log('کامنت حذف شد')
    fetch(`https://dashbord-cms.liara.run/api/comments/${commetID}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false)
        getAllComment()
      })
    setIsShowDeleteModal(false)
  }
  const submitEditModal = (e) => {
    e.preventDefault()
    console.log('کامنت ادیت شد')
    fetch(`https://dashbord-cms.liara.run/api/comments/${commetID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: mainCommentBody }),
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowEditModal(false)
        getAllComment()
      })
    setIsShowEditModal(false)
  }
  const AcceptModal = () => {
    console.log('کامنت تایید شد')
    fetch(`https://dashbord-cms.liara.run/api/comments/accept/${commetID}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        getAllComment()
      })
    setIsShowAcceptModal(false)
  }
  return (
    <div className="comments-container">
      {allComments.length ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">اسم کاربر</th>
                <th scope="col">محصول</th>
                <th scope="col">کامنت</th>
                <th scope="col">تاریخ</th>
                <th scope="col">ساعت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allComments.map((comment) => {
                return (
                  <tr key={comment.id}>
                    <td>{comment.userID}</td>
                    <td> {comment.productID}</td>
                    <td>
                      <button
                        className="products-table-btn btn"
                        onClick={() => {
                          setCommentBody(comment.body)
                          setShowDetailsModal(true)
                        }}
                      >
                        دیدن متن
                      </button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.hour}</td>
                    <td>
                      <button
                        className="products-table-btn btn"
                        onClick={() => {
                          setIsShowDeleteModal(true)
                          setCommentID(comment.id)
                        }}
                      >
                        حذف
                      </button>
                      <button className="products-table-btn btn mx-2">
                        پاسخ
                      </button>
                      <button
                        className="products-table-btn btn  mx-2"
                        onClick={() => {
                          setIsShowEditModal(true)
                          setMainCommentBody(comment.body)
                          setCommentID(comment.id)
                        }}
                      >
                        ویرایش
                      </button>
                      {comment.isAccept === 0 && (
                        <button
                          className="products-table-btn btn"
                          onClick={() => {
                            setIsShowAcceptModal(true)
                            setCommentID(comment.id)
                          }}
                        >
                          تایید
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Errorbox msg={'هیچ کامنتی یافت نشد'} />
      )}
      {showDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <p>{commentBody}</p>
          <button
            className="btn close-comment-details"
            onClick={closeDetailsModal}
          >
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="
        آیا از حذف اطمینان داری؟
        "
          cancelAction={closeDeleteModal}
          submitAction={deletComment}
        ></DeleteModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={closeEditModal}
          onSubmit={(e) => submitEditModal(e)}
        >
          <textarea
            value={mainCommentBody}
            onChange={(event) => setMainCommentBody(event.target.value)}
          ></textarea>
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title="
        آیا از تایید کامنت اطمینان داری؟
        "
          cancelAction={closeAcceptodal}
          submitAction={AcceptModal}
        ></DeleteModal>
      )}
    </div>
  )
}

export default Comments

import React, { useState } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'

function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)

  const deleteModalCancelAction = () => {
    console.log('مدال کنسل شد')
    setIsShowModal(false)
  }
  const deleteModalSubmitAction = () => {
    console.log('مدال تایید شد')
    setIsShowModal(false)
  }

  const closeDetailsModal = () => {
    console.log('مودال بسته شد')
    setIsShowDetailsModal(false)
  }
  const updateProductInfos = (event) => {
    event.preventDefault()
    console.log('محصول ویراش شد')
  }
  return (
    <>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">عکس</th>
              <th scope="col">اسم</th>
              <th scope="col">قیمت</th>
              <th scope="col">موجودی</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="">
                <img
                  src="/images/oil.jpeg"
                  className="img-fluid img-table"
                  alt="oil"
                />
              </th>
              <td>
                <p> روغن سرخ کردنی</p>
              </td>
              <td>92000تومان</td>
              <td>82</td>
              <td>
                <button
                  className="products-table-btn btn"
                  onClick={() => setIsShowDetailsModal(true)}
                >
                  جزئیات
                </button>
                <button
                  className="products-table-btn btn mx-2"
                  onClick={() => setIsShowModal(true)}
                >
                  حذف{' '}
                </button>
                <button
                  className="products-table-btn btn"
                  onClick={() => setIsShowEditModal(true)}
                >
                  {' '}
                  ویرایش
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isShowModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={(event) => updateProductInfos(event)}
        />
      )}
    </>
  )
}

export default ProductTable

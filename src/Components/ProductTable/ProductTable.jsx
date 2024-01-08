import React, { useState, useEffect } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import { AiFillDollarCircle } from 'react-icons/ai'
import Errorbox from '../Errorbox/Errorbox'

function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((products) => setAllProduct(products))
  }, [])

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
      {allProduct.length ? (
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
              {allProduct.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="">
                      <img
                        src={product.img}
                        className="img-fluid img-table"
                        alt="oil"
                      />
                    </th>
                    <td>
                      <p> {product.title}</p>
                    </td>
                    <td>{product.price} تومان</td>
                    <td>{product.count}</td>
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
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Errorbox msg={'هیچ محصولی یافت نشد'} />
      )}

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
        >
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="عنوان جدیدرا  وارد کنید"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="عنوان جدیدرا  وارد کنید"
            />
          </div>{' '}
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="عنوان جدیدرا  وارد کنید"
            />
          </div>{' '}
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="عنوان جدیدرا  وارد کنید"
            />
          </div>{' '}
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="عنوان جدیدرا  وارد کنید"
            />
          </div>
        </EditModal>
      )}
    </>
  )
}

export default ProductTable

import React, { useState, useEffect } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import { AiFillDollarCircle } from 'react-icons/ai'
import Errorbox from '../Errorbox/Errorbox'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import separate from '../separate/separate'
function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [allProduct, setAllProduct] = useState([])
  const [productId, setProductId] = useState(null)
  const [mainProductInfos, setMainProductInfos] = useState({})

  const [productNewTitle, setProductNewTitle] = useState('')
  const [productNewPrice, setProductNewPrice] = useState('')
  const [productNewCount, setProductNewCount] = useState('')
  const [productNewImg, setProductNewImg] = useState('')
  const [productNewPopularity, setProductNewPopularity] = useState('')
  const [productNewSale, setProductNewSale] = useState('')
  const [productNewColor, setProductNewColor] = useState('')
  useEffect(() => {
    getItemApi()
  }, [])

  const getItemApi = () => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((products) => setAllProduct(products))
  }
  const deleteModalCancelAction = () => {
    console.log('مدال کنسل شد')
    setIsShowModal(false)
  }
  const deleteModalSubmitAction = () => {
    console.log('مدال تایید شد')
    console.log(productId)
    fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowModal(false)
        toast('محصول با موفقیت حذف شد')

        getItemApi()
      })
  }

  const closeDetailsModal = () => {
    console.log('مودال بسته شد')
    setIsShowDetailsModal(false)
  }
  const updateProductInfos = (event) => {
    event.preventDefault()
    const productNewInfos = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColor,
    }

    fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        getItemApi()
        setIsShowEditModal(false)
      })

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
                    <td>{separate(product.price)} تومان</td>
                    <td>{product.count}</td>
                    <td>
                      <button
                        className="products-table-btn btn"
                        onClick={() => {
                          setIsShowDetailsModal(true)
                          setMainProductInfos(product)
                        }}
                      >
                        جزئیات
                      </button>
                      <button
                        className="products-table-btn btn mx-2"
                        onClick={() => {
                          setIsShowModal(true)
                          setProductId(product.id)
                        }}
                      >
                        حذف
                      </button>
                      <button
                        className="products-table-btn btn"
                        onClick={() => {
                          setIsShowEditModal(true)
                          setProductId(product.id)
                          setProductNewTitle(product.title)
                          setProductNewPrice(product.price)
                          setProductNewImg(product.img)
                          setProductNewPopularity(product.popularity)
                          setProductNewSale(product.sale)
                          setProductNewCount(product.count)
                          setProductNewColor(product.colors)
                        }}
                      >
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
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">محبوبیت</th>
                <th scope="col">فروش</th>
                <th scope="col">رنگ بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{mainProductInfos.popularity}</th>
                <td>{separate(mainProductInfos.sale)}</td>
                <td>{mainProductInfos.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
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
              value={productNewTitle}
              onChange={(event) => setProductNewTitle(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="قیمت جدیدرا  وارد کنید"
              value={productNewPrice}
              onChange={(event) => setProductNewPrice(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="موجودی جدیدرا  وارد کنید"
              value={productNewCount}
              onChange={(event) => setProductNewCount(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="ادرس کاور جدیدرا  وارد کنید"
              value={productNewImg}
              onChange={(event) => setProductNewImg(event.target.value)}
            />
          </div>{' '}
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="محبوبیت جدیدرا  وارد کنید"
              value={productNewPopularity}
              onChange={(event) => setProductNewPopularity(event.target.value)}
            />
          </div>{' '}
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="میزان فروش جدیدرا  وارد کنید"
              value={productNewSale}
              onChange={(event) => setProductNewSale(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiFillDollarCircle />
            </span>
            <input
              type="text "
              className="edit-product-input"
              placeholder="تعداد رنگ بندی جدیدرا  وارد کنید"
              value={productNewColor}
              onChange={(event) => setProductNewColor(event.target.value)}
            />
          </div>
        </EditModal>
      )}
      <ToastContainer />
    </>
  )
}

export default ProductTable

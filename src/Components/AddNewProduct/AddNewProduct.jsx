import React, { useState } from 'react'
import './AddNewProduct.css'
//import icon component from react icon
import { FiDollarSign } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { MdColorLens } from 'react-icons/md'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
function AddNewProduct() {
  const [newProductTitle, setNewProductTilte] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [newProductCount, setNewProductCount] = useState('')
  const [newProductimg, setNewProductimg] = useState('')
  const [newProductPopularity, setNewProductPopularity] = useState('')
  const [newProductSale, setNewProductSale] = useState('')
  const [newProductColors, setNewProductColors] = useState('')

  const newProductsInfos = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductimg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  }
  console.log(newProductsInfos)
  const addNewProduct = (event) => {
    event.preventDefault()
    console.log('محصول اضافه شد')
    fetch(`http://localhost:3000/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProductsInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
  }

  return (
    <div className="addNewProduct">
      <h1 className="title">افزودن محصول جدید</h1>
      <form className="form">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdOutlineDriveFileRenameOutline />
              <input
                value={newProductTitle}
                onChange={(event) => setNewProductTilte(event.target.value)}
                type="text"
                placeholder="اسم محصول را بنویسید"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input
                value={newProductPrice}
                onChange={(event) => setNewProductPrice(event.target.value)}
                type="text"
                placeholder="قیمت محصول را بنویسید"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <AiOutlineShopping />
              <input
                value={newProductCount}
                onChange={(event) => setNewProductCount(event.target.value)}
                type="text"
                placeholder="موجودی محصول را بنویسید"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input
                value={newProductimg}
                onChange={(event) => setNewProductimg(event.target.value)}
                type="text"
                placeholder="ادرس عکس محصول را بنویسید"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdAddPhotoAlternate />
              <input
                value={newProductPopularity}
                onChange={(event) =>
                  setNewProductPopularity(event.target.value)
                }
                type="text"
                placeholder="میزان محبوبیت  محصول را بنویسید"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input
                value={newProductSale}
                onChange={(event) => setNewProductSale(event.target.value)}
                type="text"
                placeholder="میزان فروش محصول را بنویسید"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdColorLens />
              <input
                value={newProductColors}
                onChange={(event) => setNewProductColors(event.target.value)}
                type="text"
                placeholder="تعداد  رنگ بندی  محصول را بنویسید"
              />
            </div>
          </div>
        </div>
        <button
          className="addNewProduct-btn btn "
          onClick={(event) => addNewProduct(event)}
        >
          ثبت محصول
        </button>
      </form>
    </div>
  )
}

export default AddNewProduct

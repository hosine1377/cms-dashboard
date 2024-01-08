import React from 'react'
import './AddNewProduct.css'
//import icon component from react icon
import { FiDollarSign } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { MdColorLens } from 'react-icons/md'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
function AddNewProduct() {
  return (
    <div className="addNewProduct">
      <h1 className="title">افزودن محصول جدید</h1>
      <form className="form">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdOutlineDriveFileRenameOutline />
              <input type="text" placeholder="اسم محصول را بنویسید" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input type="text" placeholder="قیمت محصول را بنویسید" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <AiOutlineShopping />
              <input type="text" placeholder="موجودی محصول را بنویسید" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input type="text" placeholder="ادرس عکس محصول را بنویسید" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdAddPhotoAlternate />
              <input
                type="text"
                placeholder="میزان محبوبیت  محصول را بنویسید"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <FiDollarSign />
              <input type="text" placeholder="میزان فروش محصول را بنویسید" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <MdColorLens />
              <input
                type="text"
                placeholder="تعداد  رنگ بندی  محصول را بنویسید"
              />
            </div>
          </div>
        </div>
        <button className="addNewProduct-btn btn ">ثبت محصول</button>
      </form>
    </div>
  )
}

export default AddNewProduct

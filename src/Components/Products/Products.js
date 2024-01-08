import React from 'react'
import Errorbox from '../Errorbox/Errorbox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'
function Products() {
  return (
    <>
      <Errorbox msg={'هیچ محصولی یافت نشد'} />
      <AddNewProduct />
      <ProductTable />
    </>
  )
}

export default Products

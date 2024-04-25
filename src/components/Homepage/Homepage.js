import React, { useContext, useEffect } from 'react'
import HomepageNavbar from './HomepageNavbar'
// import { Link } from 'react-router-dom'
import ProductContext from '../../context/product/ProductContext'
import Card from './Card'
function Homepage() {
  const context = useContext(ProductContext)
  const { products, getallProduct} = context;
  // console.log(products)

  useEffect(() => {
        getallProduct()
    // eslint-disable-next-line
}, [getallProduct]);
    return (
        <>
          <HomepageNavbar/>
          <div className="row">
          {products.map((product) => {
                    return <Card key={product.unid}  product={product} />
                })}
          </div>
        </>
    )
}

export default Homepage
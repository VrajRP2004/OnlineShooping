import React, { useContext, useEffect } from 'react'
import HomepageNavbar from './HomepageNavbar'
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import ProductContext from '../../context/product/ProductContext'
import Card from './Card'
function Homepage() {
  const location = useLocation();
  const { token } = location.state || {}
  // console.log(token)
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
            {/* {(products===null? <div>No product added</div> : (products.map((product) => {
                    return <Card key={product.unid}  product={product} />
                })))

            } */}
          {products.map((product) => {
                    return <Card className="mx-3" key={product.unid} token={token}  product={product} />
                })}
          </div>
        </>
    )
}

export default Homepage
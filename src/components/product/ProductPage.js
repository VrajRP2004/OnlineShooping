import React, { useContext, useEffect } from 'react';
import ProductContext from '../../context/product/ProductContext';
import { useParams } from 'react-router-dom';
function ProductPage() {
    const context = useContext(ProductContext);
    const { products, getOneProduct } = context;
    const { id } = useParams();
    // console.log(id)
    // Assuming you want to fetch products when ProductPage mounts
    useEffect(() => {
        getOneProduct(id); // Call the function to fetch product details
    }, [getOneProduct]); // Dependency array ensures this effect runs only once when component mounts

    return (
      <div className="card mx-1" style={{ width: '18rem' }}>
      <img src={products.productimage} className="card-img-top" alt="..." />
      <div className="card-body">
          <h5 className="card-title">Name : {products.productname}</h5>
          <p className="card-text">Price : {products.productprice}</p>
          <p className="card-text">Information : {products.productdescription}</p>
            
      </div>
  </div>
    );
}

export default ProductPage;

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
      <div  style={{ display:'flex', padding:'10px' }}>
      <img style={{height:'300px'}} src={products.productimage}  alt="..." />
      <div style={{paddingLeft:'40px', paddingTop:"20px"}} >
          <h5 >
            Name : {products.productname}
            </h5>
          <h5>Price : {products.productprice}</h5>
          <p >Information : {products.productdescription}</p>
          <button type="submit" className="btn btn-primary">Buy</button>
          <button type="submit" className="btn btn-primary mx-2">Add to Cart</button>

            
      </div>
  </div>
    );
}

export default ProductPage;

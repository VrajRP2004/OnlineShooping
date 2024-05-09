import { Link } from 'react-router-dom'
// import Image from '../Images/SKU-01-Red.jpg'
import React, { useContext } from 'react'
import ProductContext from '../../context/product/ProductContext'
// import ProductPage from '../product/ProductPage';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function Card(props) {
    const context = useContext(ProductContext);
    // console.log(context)
    const { product } = props;
    // console.log(product._id)
    return (
        <>
            <div className="card mx-1" style={{ width: '18rem' }}>
                <img src={product.productimage} className="card-img-top" alt="..." />
                {/* {console.log(product.productimage)} */}
                <div className="card-body">
                    <h5 className="card-title">Name : {product.productname}</h5>
                    <p className="card-text">Price : {product.productprice}</p>
                    <p className="card-text">Information : {product.productdescription}</p>
                    <Link to={'/${product.id}'} className="btn btn-primary">More Details</Link>
                      
                </div>
            </div>
        </>
    )
}

export default Card
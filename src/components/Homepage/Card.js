import { Link } from 'react-router-dom'
// import Image from '../Images/SKU-01-Red.jpg'
import React, { useContext } from 'react'
import ProductContext from '../../context/product/ProductContext'



function Card(props) {
    const context = useContext(ProductContext);
    // console.log(context)
    const { product } = props;
    return (
        <>
            <div className="card mx-1" style={{ width: '18rem' }}>
                <img src={product.productimage} className="card-img-top" alt="..." />
                {/* {console.log(product.productimage)} */}
                <div className="card-body">
                    <h5 className="card-title">{product.productname}</h5>
                    <p className="card-text">{product.productprice}</p>
                    <Link to="/" className="btn btn-primary">{product.productdescription}</Link>
                </div>
            </div>
        </>
    )
}

export default Card
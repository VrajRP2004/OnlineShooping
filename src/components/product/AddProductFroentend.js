import React, { useState, useContext } from 'react';
import ProductContext from '../context/product/ProductContext';

function AddProductFrontend() {
    const convertToBase64 = (e) => {
        console.log(e);
        if (e.target.files && e.target.files.length > 0) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
                // You can store the base64-encoded image data in state or pass it to a function here
            };
            reader.onerror = () => {
                console.log(reader.error);
            };
        } else {
            console.log("No file selected.");
        }
    };

    const context = useContext(ProductContext);
    const { addProduct } = context;
    const [Product, setProduct] = useState({ productname: "", productprice: "", productdescription: "", productimage: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addProduct(Product.productname, Product.productprice, Product.productdescription, Product.productimage);
        setProduct({ productname: "", productprice: "", productdescription: "", productimage: "" });
    }

    const onChange = (e) => {
        setProduct({ ...Product, [e.target.name]: e.target.value });
    }

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" name="productname" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Product Price</label>
                    <input type="number" className="form-control" name="productprice" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Description</label>
                    <input type="text" className="form-control" name="productdescription" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Product Image</label>
                    <input className="form-control" type="file" accept='image/*' name="productimage" onChange={convertToBase64} />
                </div>

                <button disabled={Product.productname.length < 2 || Product.productdescription.length < 2 || Product.productprice.length < 1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Product</button>
            </form>
        </div>
    )
}

export default AddProductFrontend;

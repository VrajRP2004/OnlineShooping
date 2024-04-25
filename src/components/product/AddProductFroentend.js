import React, { useState, useContext } from 'react';
import ProductContext from '../../context/product/ProductContext'

function AddProductFrontend() {
    
    const context = useContext(ProductContext);
    // console.log(context)
    const { addProduct } = context;
    const [Product, setProduct] = useState({ productname: "", productprice: "", productdescription: "", productimage: "" });

    const handleClick = (e) => {
        // e.preventDefault();
        addProduct(Product.productname, Product.productprice, Product.productdescription, Product.productimage);
        // setProduct({ productname: "", productprice: "", productdescription: "", productimage: "" });
    }

    const onChange = (e) => {
        setProduct({ ...Product, [e.target.name]: e.target.value });
    }
    const [image,setImage] = useState("")
    const convertToBase64 = (e) => {
        // console.log(e);
        setProduct({ ...Product, [e.target.name]: e.target.value });    
        if (e.target.files && e.target.files.length > 0) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                // console.log(reader.result);
                // You can store the base64-encoded image data in state or pass it to a function here
                setImage(reader.result)
            };
            reader.onerror = () => {
                console.log(reader.error);
            };
        } else {
            console.log("No file selected.");
        }
    };
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id='productname' name="productname" value={Product.productname} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productprice" className="form-label">Product Price</label>
                    <input type="number" value={Product.productprice} className="form-control" id='productprice' name="productprice" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productdescription" className="form-label">Description</label>
                    <input type="text" value={Product.productdescription} className="form-control" id="productdescription" name="productdescription" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productimage" value={Product.productimage} className="form-label">Product Image</label>
                    <input className="form-control" type="file" accept='image/*' id='productimage' name="productimage" onChange={convertToBase64} />
                </div>

                <button disabled={Product.productname.length < 2 || Product.productdescription.length < 2 || Product.productprice.length < 1} type="submit" className="btn btn-primary"  onClick={handleClick}>Add Product</button>
            </form>
        </div>
    )
}

export default AddProductFrontend;
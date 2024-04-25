import { useState } from "react";
import ProductContext from "./ProductContext";

function ProductState(props) {
    const host = "http://localhost:5000"
    const productInitaial = []
    const [products, setProducts] = useState(productInitaial)


    // get product

    const getallProduct = async(productname, productprice, productdescription, productimage) =>{
        try{
            const response = await fetch(`${host}/api/auth/fetchallproduct`,{
                method:'GET'
            })
            const json = await response.json();
            setProducts(json);
        }catch(error){
            console.log(error.message, error);
        }
    }

    // add product
    const addProduct = async (productname, productprice, productdescription, productimage) => {
        try {
            const response = await fetch(`${host}/api/auth/addproduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept:'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ productname, productprice, productdescription,productimage: productimage })
            });
            const product = await response.json();
            console.log(product.productimage)
            // console.log(product); // Log the parsed JSON response
            setProducts(products.concat(product));
        } catch (error) {
            console.log(error.message, error);
        }
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, getallProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;

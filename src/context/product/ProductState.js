import { useState } from "react";
import ProductContext from "./ProductContext";

function ProductState(props) {
    const host = "http://localhost:5000"
    const productInitaial =[]
    const [products, setProducts] = useState(productInitaial)
    const addProduct =async (productname, productprice, productdescription,productimage) => {
        try{
        const response = await fetch(`${host}/api/auth/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({productname, productprice, productdescription,productimage})
        });
        console.log(response.json())
        const product = await response.json()
        setProducts(products.concat(product))
    }catch(error){
        console.log(error.message,error)
    }
    }
  return (
    <ProductContext.Provider value={{products,addProduct}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
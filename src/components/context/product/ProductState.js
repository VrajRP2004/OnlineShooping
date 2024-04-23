import { useState } from "react";
import ProductContext from "./ProductContext";

function ProductState(props) {
    const host = "http://localhost:5000"
    const productInitaial =[]
    const [products, setProducts] = useState(productInitaial)
    const addProduct =async (productname, productprice, productdescription,productimage) => {
        const response = await fetch(`${host}/api/auth/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({productname, productprice, productdescription,productimage})
        });

        const product = await response.json()
        setProducts(products.concat(product))
    }
  return (
    <ProductContext.Provider value={{products,addProduct}}>
        {props.childern}
    </ProductContext.Provider>
  )
}

export default ProductState
import React, {useState} from 'react'
import UserContext from './UserContext'
function UserState(props) {
    const host = "http://localhost:5000"
    const UsercartInitaial = []
    const [userCart, setUserCart] = useState(UsercartInitaial)

    // add to cart of individual user
    const addToCart = async(id)=>{
        try{
            const response = await fetch(`${host}/api/auth/fetchallproduct/${id}`,{
                method:'POST'
            })
            const json = await response.json();
            setUserCart(json);
        }catch(error){
            console.log(error.message,error)
        }
    }
  return (
    <div>UserState</div>
  )
}

export default UserState
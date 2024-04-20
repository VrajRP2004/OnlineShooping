import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    let navigate = useNavigate();
    const handlelogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    useEffect(()=>{
        // console.log(location.pathname)
    },[location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">E-Commerce</Link>
                    <div id="navbarSupportedContent">
                        {!localStorage.getItem('token')?<form className="d-flex" role="search">
                            <Link className='btn btn-primary mx-2' to="/login" role="button">Login</Link>
                            <Link className='btn btn-primary mx-2' to="/signup" role="button">SignUp</Link>
                        </form>:<button onClick={handlelogout} className='btn btn-primary'>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

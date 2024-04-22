import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/SKU-01-Red.jpg'
function Card() {
    return (
        <>
            <div className="card mx-3" style={{ width: '18rem' }}>
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}

export default Card
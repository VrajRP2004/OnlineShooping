import React from 'react'

function AddProductFroentend() {
    const handleImage = (e)=>{
        console.log(e)
    }
    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Product Price</label>
                <input type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Description</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Product Image</label>
                <input className="form-control" type="file" onChange={handleImage} />
            </div>

            <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
    )
}

export default AddProductFroentend
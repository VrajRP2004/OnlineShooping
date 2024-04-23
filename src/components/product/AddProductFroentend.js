import React from 'react'

function AddProductFroentend() {
    const convertToBase64 = (e) => {
        console.log(e);
        if (e.target.files && e.target.files.length > 0) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
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
                <input className="form-control" type="file" accept='image/*' onChange={convertToBase64} />
            </div>

            <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
    )
}

export default AddProductFroentend
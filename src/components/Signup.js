import React, {useState} from 'react'
import { useNavigate }from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: ""})
    let nevigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        // console.log(json);
        if (json.success){
            //  save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            nevigate('/home')
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" id="labelname" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name"  required minLength={2} name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" id="labelemail" className="form-label">Email address</label>
                    <input type="email" className="form-control"  onChange={onChange} id="email1" required minLength={2}  name="email" aria-describedby="emailHelp" value={credentials.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" id="labelpassword" className="form-label">Password</label>
                    <input type="password"   onChange={onChange} className="form-control"  id="password"name="password"   required minLength={2} value={credentials.password}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
    </div>
  )
}

export default Signup

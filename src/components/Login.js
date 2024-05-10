import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            const json = await response.json();
            if (json.success) {
                localStorage.setItem('token', json.authToken);
                navigate("/home");
            } else {
                // Handle login failure
                console.error("Login failed");
            }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} name='email' id="email" aria-describedby="emailHelp" value={credentials.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password"  className="form-label">Password</label>
                    <input type="password" onChange={onChange} className="form-control" name='password' id="password" value={credentials.password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const naviagte = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({username, password})
        })

        const data = await response.json();

        if (response.ok) {
            console.log('Login Success:', data);
            localStorage.setItem('token', data.token);
            naviagte('/')
        } else {
            console.error('Login Failed:', data.message);
        }
    }


    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card text-center" style={{ width: '300px' }}>
                <h3 className="mt-3">TaskTrek</h3>
                <hr />
                <div className="card-body">
                    <form onSubmit={(e) => handleLogin(e)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input type="text" id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                            className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary w-50">Login</button>
                    </form>

                    <hr />

                    <div>
                        <h5>New User?</h5>
                        <button className='btn btn-success w-75'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

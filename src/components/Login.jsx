import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {


    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const navigate = useNavigate();


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
            navigate('/')
        } else {
            console.error('Login Failed:', data.message);
        }
    }


    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
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

                    <button onClick={handleGoogleLogin} className=" btn btn-warning rounded-md px-2 py-2 text-neutral-900 bg-neutral-200 flex items-center gap-4">
                    <svg
                    className='m-1 text-success'
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 488 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                    >
                    <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
                    </svg>
                    Sign Up with Google
                    </button>

                    <hr />

                    <div>
                        <h5>New User?</h5>
                        <Link to="/signup">
                        <button className='btn btn-success w-75' >Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React from 'react';

const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card text-center" style={{ width: '300px' }}>
                <h3 className="mt-3">TaskTrek</h3>
                <hr />
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input type="text" id="username" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" id="password" className="form-control" />
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

import { useState } from "react"
import { useNavigate } from "react-router-dom";


const SignUp = () => {


  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');


  const navigate = useNavigate();


  const formHandler = async (e) => {
    e.preventDefault();

    if(password === confirmPassword){
      const response = await fetch('http://localhost:3000/user', {
        method: "POST",
        headers:{
          "content-type" : "application/json"
        },
        body: JSON.stringify({username, password})
      })

      const data = await response.json();

      if (response.ok) {
        console.log('User Created:', data);
        setTimeout(() => {
          navigate('/login')
        }, 3000)
    } else {
        console.error('Signup Failed:', data.message);
    }
    }

  }

  

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>

      <div className="card text-center" style={{width: "300px"}}>
      <h3 className="mt-3">TaskTrek</h3>
        <hr />
        <div className="card-body">
            <form onSubmit={formHandler}>
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
                <input type="text" id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="form-control" />
              </div>


              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                <input type="text" id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
                className="form-control" />
              </div>
              
              <button className="btn btn-success">Sign Up</button>
            </form>
        </div>
      </div>

    </div>
  )
}



export default SignUp;
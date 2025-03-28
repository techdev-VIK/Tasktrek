import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import GoogleAuthHandler from './components/GoogleAuthHandler';


function App() {


  return(
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><Homepage /></PrivateRoute>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/auth/google/callback" element={<GoogleAuthHandler />} />
        </Routes>
      </Router>
  )

}

export default App

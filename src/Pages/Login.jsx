import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './PageCSS/Login.css'

const Login = () => {
  return (
   <>
   <Header/>
   <center>
   <h1>Login Page</h1><br></br>
   <div className='Login'>
    <input type="text" className="username" placeholder="Enter your name"/> <br></br>
    
    <input type="text" className="userpassword" placeholder="Enter your password"/> <br></br>
    <button className='btn1'>Sign up..</button>
    <button className='btn2'>Login</button>
    
    </div>
   </center>
   <footer/>
   </>
  )
}

export default Login
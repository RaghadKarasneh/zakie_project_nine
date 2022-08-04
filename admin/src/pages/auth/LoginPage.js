import React,{useState} from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

function LoginPage() {

    const [email, setEmail]=useState('');
    const [error, setErorr]=useState('');
    const [password, setPassword]=useState('');

    const handleEmailChange=(e)=>{
       setErorr('');
      setEmail(e.target.value);
    }
    
    const handlePasswordChange=(e)=>{
        setErorr('');
      setPassword(e.target.value);
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault();
      
      if (email!=='')
      {
          if (email==='admin@admin.com') 
          {
            setErorr('');
            if (password!=='')
            {

              if (password==='password') 
              {
                sessionStorage.setItem('admin','true')
                window.location.href='/dashboard';
              }
              else
              {
                setErorr('Invalid credintals');
              }
            }
            else
            {
                setErorr('Password Required');
            }
          }
          else
          {
            setErorr('Invalid credintals')
          }
      }
      else
      {
        setErorr('Email Required');
      }

      
}
  return (
    <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Log In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" onChange={handleEmailChange} value={email}/>
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={handlePasswordChange} value={password}/>
                </div>
                {error&&<div className='error-msg text-danger'>{error}</div>}       


                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-danger btn-lg" onClick={(e)=>{handleFormSubmit(e)}}>Login</button>
                </div>
            </form>
        </>
  )
}

export default authLayout(LoginPage);

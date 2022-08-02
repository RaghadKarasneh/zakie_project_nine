import React, {useState} from 'react';
import './adminlogin.css';

function AdminLogin() {
    const [email, setEmail]=useState('');
    const [emailError, setEmailErorr]=useState('');

    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');

    
    
    const handleEmailChange=(e)=>{
      setEmailErorr('');
      setEmail(e.target.value);
    }
    
    const handlePasswordChange=(e)=>{
      setPasswordError('');
      setPassword(e.target.value);
    }
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      
      if (email!=='')
      {
          if (email==='admin@admin.com') 
          {
            setEmailErorr('');
            if (password!=='')
            {

              if (password==='password') 
              {
                window.location.href='/dashboard';
              }
              else
              {
                setPasswordError('Invalid credintals');
              }
            }
            else
            {
              setPasswordError('Password Required');
            }
          }
          else
          {
            setEmailErorr('Invalid credintals')
          }
      }
      else
      {
        setEmailErorr('Email Required');
      }

      
}
    return(
      <> 
{/* <script src='back.js'></script> */}
<section className='divv'>

        <div className="login-wrapper ">
        <h1>Admin Login</h1>
        <form className='form-group formm' onSubmit={handleFormSubmit}>
          <label className='lbl'> Email </ label><br/>
            <input type="text" className='form-control inp' placeholder='Your Email' 
            onChange={handleEmailChange} value={email}/>
            {emailError&&<div className='error-msg'>{emailError}</div>}       

          <label className='lbl'>Password </label><br/>
            <input type="password" className='form-control inp' placeholder='Your Password'
            onChange={handlePasswordChange} value={password}/>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}       

          <div>
            <button type="submit" className='btn-warning admin-btn' >Submit</button>
          </div>
          <br/>
        </form>
       </div>
            </section>
      </>
    );
   
    
}
export default AdminLogin;
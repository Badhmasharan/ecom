import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Forgot.css' ;

const Forgot = () => {
  const navigate = useNavigate();

  const handlepass = () => {
    navigate('/login');
  };
 
  return(
    <div className='loginnn2'>
      <div className='content2'>
        <div className='box2'>
    <div className='split2'>
      <h1 className='brand2'>WALL<span>e</span></h1>
      <h4 className='slogan2'> A few clicks is all it takes.</h4>
    </div>
  
    <div class="wrapper2">
      <form action=""> 
        <h1>Forgot Password</h1>
        <div class="input-boxf">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-boxf">
          <input type="number" placeholder="Phone Number" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div><br></br></div>
        <div class="remember-forgot1">

          <a>Send Otp</a>
        </div>
        <div class="input-boxf">
          <input type="number" placeholder="OTP" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="input-boxf">
          <input type="text" placeholder="New Password" required/>
          <i class='bx bxs-user'></i>
        </div>
        
        <button type="submit" class="btn2" onClick={handlepass}>Change Password</button>
        
        
      </form>
      </div>
      </div>
    </div>
    </div>
    );
    };

export default Forgot;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signuppage.css';
import LoadingScreen from '../loadingscreen/LoadingScreen'; 

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessImage, setShowSuccessImage] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      setMessage('');

      if (!username || !password || !phonenumber || !confirmPassword) {
        setMessage('Please fill in all fields');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setMessage('Passwords do not match');
        setLoading(false);
        return;
      }

      if (!/^\d{10}$/.test(phonenumber)) {
        setMessage('Phone number must be 10 digits');
        setLoading(false);
        return;
      }

      const response = await axios.get(`http://localhost:3006/users?username=${username}&phonenumber=${phonenumber}`);
      const existingUser = response.data[0];

      if (existingUser) {
        setMessage('Account already exists');
        setLoading(false);
        return;
      }

      const registerResponse = await axios.post('http://localhost:3006/users', {
        username,
        password,
        phonenumber,
      });

      console.log('Registration successful:', registerResponse.data);
      setMessage('Account created successfully');
      setLoading(false);
      setShowSuccessImage(true);

      setTimeout(() => {
        setShowSuccessImage(false);
        navigate('/login');
      }, 4300);
    } catch (error) {
      console.error('Registration failed:', error.message);
      setMessage('Failed to create account');
      setLoading(false);
    }
  };

  return (
    <div className='loginnn1'>
      <div className='content'>
        <div className='box'>
          <div className='split1'>
            <h1 className='brand1'>WALL<span>e</span></h1>
            <h4 className='slogan1'>A few clicks is all it takes.</h4>
          </div>

          <div className="wrapper1">
            <form action="">
              <h1>Sign Up</h1>
              <div className="input-boxx">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className='bx bxs-user'></i>
              </div>
              <div className="input-boxx3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  maxLength="10" // Added maxLength to limit input to 10 characters
                  required
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
                <i className='bx bxs-user'></i>
              </div>
              <div className="input-boxx1">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className='bx bxs-lock-alt'></i>
              </div>
              <div className="input-boxx2">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i className='bx bxs-lock-alt'></i>
              </div>
              <div><br /></div>

              <button type="button" className="btnn" onClick={handleRegister}>
                Register
              </button>

              {message && <p className="message">{message}</p>}
            </form>
          </div>
        </div>
      </div>
      {loading && <LoadingScreen />} 
      {showSuccessImage && <LoadingScreen />} 
    </div>
  );
};

export default Register;

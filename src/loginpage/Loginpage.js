import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const Loginpg = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedRememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.alert('Logged in successfully');

    
    if (!username || !password) {
      alert("Please provide both username and password");
      return;
    }

    
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', true);
    } else {
    
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }

    axios
      .get(`http://localhost:3006/users?username=${username}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
          navigate("/");
        } else {
          alert("User account doesn't exist");
        }
      });
  };
  const handleLogin = () => {
    axios.post('http://your-api-url/login', { username, password })
      .then((response) => {
        const actualUsername = response.data.username; 
        localStorage.setItem('rememberedUsername', actualUsername);
        localStorage.setItem('rememberedPassword', password);
        localStorage.setItem('rememberMe', true);
        setUsername(actualUsername);
        navigate('/');
        
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  const handlesignup = () => {
    navigate('/signup');
  };

  const handlepass = () => {
    navigate('/forgot');
  };

  return (
    <div className='loginnn'>
      <div className='content'>
      <div className='box'>
      <div className='split'>
        <h1 className='brand'>WALL<span>e</span></h1>
        <h4 className='slogan'>A few clicks is all it takes.</h4>
      </div>

      <div className="wrapper">
        <div>
          <form action="">
            <h2>LOGIN</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={handleUsername}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box2">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePassword}
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div><br></br></div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  className='checkbox'
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                Click me
              </label>
              <a onClick={handlepass}>Forgot Password?</a>
            </div>
            <button type="button" className="btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="register-link">
              <p>Don't have an account?</p> <a onClick={handlesignup}>Register</a>
            </div>
          </form>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default Loginpg;

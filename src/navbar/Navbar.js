import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DropdownMenu from "./DropdownMenu";
import Lottie from 'react-lottie';
import hellobot from './hellobot.json';
import { GiShoppingCart } from "react-icons/gi";
import { BiFontSize } from "react-icons/bi";
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [toppic, setTopic] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('rememberedUsername');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3200/all");
        setAllItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    filterItems();
  }, [searchQuery, toppic, allItems]);

  const filterItems = () => {
    const filtered = allItems.filter(item => {
      const itemName = item.name || '';
      return itemName.toLowerCase().includes(searchQuery.toLowerCase()) && (toppic === "all" || item.category === toppic);
    });
    setFilteredItems(filtered);
  };

  const handleSearch = () => {
    filterItems();
    navigate('/filtered-items'); 
  };


  const handleLogin = () => {
    const enteredUsername = '';
    localStorage.setItem('rememberedUsername', enteredUsername);
    setIsLoggedIn(true);
    setUsername(enteredUsername);
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('rememberedUsername');
    setIsLoggedIn(false);
    setUsername('');
    window.alert('Logged out successfully');
    
  };
  

  const cart = () => {
    navigate('/cart');
  };

  return (
    <div className='header'>
      <div className='shipping'>
        <div className='icon'>
          <LiaShippingFastSolid />
        </div>
        <p className='delivery'> Free delivery for purchases above $2000 </p>
        <button className='topicbutton' onClick={() => navigate('/')}>
          <h1>WALLe</h1>
        </button>
        <div className='user'>
      {isLoggedIn ? (
        <div className="profile-dropdown"><p className="greeting"> Welcome!<br></br></p>
          <div className="profile-icon" onClick={() => setShowDropdown(!showDropdown)}>
            <VscAccount />  
          </div>
          {showDropdown && <DropdownMenu
  username={username}
  isLoggedIn={isLoggedIn}
  handleLogin={handleLogin}
  handleLogout={handleLogout}
/>}
        </div>
      ) : (
        <button className="logiinn" onClick={handleLogin}>Login <VscAccount /></button>
      )}
    </div>
      </div>
      <div className='header2'>
        <div className='Location'>
          GET SET GO !
        </div>
        <div className='searchbar'>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}><FaMagnifyingGlass /></button>
      </div>
        <div className='sell'>
          <button><BsShop /> <b>Sell</b></button>
        </div>
        <div className='orders'>
          <button><b>Orders</b></button>
        </div>
        <div className='cart'>
          <button onClick={cart} className="cart-text">
            <div className="cart-icon" ><GiShoppingCart />&nbsp;</div>
            <div className="cart-cart">Cart</div></button>
        </div>
      </div>
      <div className='header3'>
        <Link to="/all"><button>All</button></Link>
        <Link to="/offers"><button>Offers</button></Link>
        <Link to="/newrelease"><button>New Releases</button></Link>
        <Link to="/gift"><button>Gift Items</button></Link>
        <Link to="/mobile"><button>Mobiles</button></Link>
        <Link to="/electronics"><button>Electronics</button></Link>
        <Link to="/kitchen"><button>Home & Kitchen</button></Link>
        <Link to="/fashion"><button>Fashion</button></Link>
        <Link to="/sports"><button>Sports & Fitness</button></Link>
      </div>
    </div>
  );
}

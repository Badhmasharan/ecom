import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./AllProduct.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { CartContext } from "../cart/CartContext";
import { IoTrashBinOutline } from "react-icons/io5";
import LoadingScreenAdded from "../loadingscreen/LoadingScreenLogout";

export default function Mobile() {
  const [items, setItems] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext); 
  const [loading, setLoading] = useState(false);
  const [showSuccessImage, setShowSuccessImage] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/mobile");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
      setLoading(false);
      setShowSuccessImage(true); 
 
      setTimeout(() => {
        setShowSuccessImage(false); 
      }, 3000);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/Attachbanner/D51285990_WLA_Attach_JulyAcc_Mob_Hero_1242x450_2.jpg" className='advertise12'></img>
      </div>
      
      <div className="product-container">
        {items.map((item) => (
          <div key={item.id} className="product-box">
            <div className="product-image">
              <img src={item.image} alt="Product" />
            </div>
            <div className="product-details">
              <h3 className="product-price">
                <BsCurrencyRupee />
                {item.price}
              </h3>
              <p className="product-description">{item.description}</p>
            </div>
            <div className="cart-button">
              {cart.some((cartItem) => cartItem.id === item.id) ? (
                <button onClick={() => removeFromCart(item.id)} className="bin">
                 <IoTrashBinOutline />
                </button>
              ) : (
                <button onClick={() => handleAddToCart(item)} className="add">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      {loading && <LoadingScreenAdded />} 
      {showSuccessImage && <LoadingScreenAdded />} 
    </div>
  );
}

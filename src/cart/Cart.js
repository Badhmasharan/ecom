import React, { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import Navbar from "../navbar/Navbar";
import "./Cart.css";
import Footer from "../footer/Footer";
import { CiCircleRemove } from "react-icons/ci";
import { CgRemoveR } from "react-icons/cg";
import { CgAddR } from "react-icons/cg";
import { LuIndianRupee } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT20") {
      setDiscount(0.2);
    } else {
      setDiscount(0);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    } else {
      console.log("Quantity cannot be negative");
    }
  };

  const handleIncrement = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  const handleDecrement = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const calculateTotalPrice = () => {
    let subtotal = 0;

    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    const discountedAmount = subtotal * discount;
    const totalPrice = subtotal - discountedAmount;

    return { totalPrice, discountedAmount, subtotal };
  };

  return (
    <div>
      <Navbar />
      <div className="cart-header">
        <h1>Shopping Bag</h1>
      </div>
      <div className="cart-partition">
        <div className="cart-container">
          <ol className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-item-details">
                <p>Cart is empty</p>
              </div>
            ) : (
              <div className="cart-item-details1">
                <div className="cart-Product-column">Product</div>
                <div className="cart-price-column">Price</div>
                <div className="cart-quantity-column">Quantity</div>
                <div className="cart-total-column">Total Price</div>
              </div>
            )}
            {cart.map((item, index) => (
              <div key={item.id} className="cart-item">
                 <div className="cart-item-details">
    <div className="image-name">
      <img src={item.image} alt="Product" className="cart-image-1" />
      <div className="cart-itemname">{item.name}</div>
    </div>
    <div className="cartamount">{item.price}</div>
    <div className="quantity">
      <button onClick={() => handleDecrement(item.id)} className="minus-but"><CgRemoveR /></button>
      <span>{item.quantity}</span>
      <button onClick={() => handleIncrement(item.id)}><CgAddR /></button>
    </div>
    <div className="cart-item-total"><LuIndianRupee className="rupee-cart" />{item.price * item.quantity}</div>
    <div>
      <button onClick={() => handleRemoveItem(item.id)} className="cart-remove">
        <CiCircleRemove />
      </button>
    </div>
  </div>
  {index !== cart.length - 1 && <hr className="cart-item-divider" />}
              </div>
            ))}
          </ol>
        </div>
        <div className="cart-footer">
        <div className="location-cart-coupon">
            <h3>Coupon Code</h3>
            <div className="coupon-input1">
              <input
                type="text"
                placeholder="Coupon Code"
                className="coupon-input-input"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={handleCouponApply} className="coupon-button">
                Apply
              </button>
            </div>
          </div>
          <div>
          <div className="total-footer">
            <h4>Cart Total</h4>
            <div className="cart-seperator"> 
            <div className="cart-total">
              <p className="cart-total-p">Cart Subtotal </p>
              <p className="cart-total-p">Discount </p>
              <p className="bold-total">Cart Total </p>
              </div>
            <div className="pricing-cart-out">
            <div className="pricing-cart-out-p"><p><LuIndianRupee className="rupee-cart" />{calculateTotalPrice().subtotal}</p></div>
            <div className="pricing-cart-out-p"><p><LuIndianRupee className="rupee-cart" />{calculateTotalPrice().discountedAmount}</p></div>
            <div className="final-price"><p><LuIndianRupee className="rupee-cart" />{calculateTotalPrice().totalPrice}</p></div>
            </div>
            </div>
            <div className="checkout-button">
              <Link to="payment"><button>Checkout</button></Link> 
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

import React, { useState } from 'react';
import './Paymentspage.css';
const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handlePayment = () => {
    // Assuming validation passes for simplicity
    // In a real application, perform thorough validation
    // before submitting payment data

    // Simulate payment processing (replace with actual API call)
    setTimeout(() => {
      setPaymentStatus('Payment successful!');
    }, 2000);
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={paymentData.cardNumber}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="cardHolderName"
        placeholder="Card Holder Name"
        value={paymentData.cardHolderName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="Expiration Date"
        value={paymentData.expirationDate}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={paymentData.cvv}
        onChange={handleInputChange}
      />
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default PaymentPage;

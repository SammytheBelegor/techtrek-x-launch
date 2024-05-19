// src/components/OrderForm.js
import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!quantity || quantity < 1) formErrors.quantity = "Quantity must be at least 1";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form
      console.log({ name, email, quantity });
      alert("Pre-order submitted!");
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Pre-order TechTrek X</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        {errors.quantity && <p className="error">{errors.quantity}</p>}
      </div>
      <button type="submit">Pre-order</button>
    </form>
  );
};

export default OrderForm;

import './Newsletter.css'
// import { PiCursorClickFill } from "react-icons/pi";
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle the subscription, like sending the email to your backend

    // For example:
    console.log(`Subscribed email: ${email}`);
    // Reset the input field after submitting
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
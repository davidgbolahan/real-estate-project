// import './ContactUs.css'

// const ContactUs = () => {
//   return (
//               <div className="contact-us">
//               <h2>Contact Us</h2>
//               <div className="contact-info">
//                 <p>Email: contact@brashhavilahrealestate.com</p>
//                 <p>Phone: +234 9081098697</p>
//                 <p>Address: 123 Main Street, City, Nigeria</p>
//               </div>
//               <form className="contact-form">
//                 <div className="form-group">
//                   <label htmlFor="name">Name:</label>
//                   <input type="text" id="name" name="name" placeholder="Your name" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" id="email" name="email" placeholder="Your email" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Message:</label>
//                   <textarea id="message" name="message" placeholder="Your message"></textarea>
//                 </div>
//                 <button type="submit">Send</button>
//               </form>
              
//             </div>
//   )
// }

// export default ContactUs
// ContactUs.js

import React from 'react';
import './ContactUs.css'
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ContactUs = () => {
  const handleNewUserMessage = (newMessage) => {
    // Handle the user's message here
    console.log(`New message: ${newMessage}`);
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Email: contact@brashhavilahrealestate.com</p>
        <p>Phone: +234 9081098697</p>
        <p>Address: 123 Main Street, Lagos Island, Nigeria.</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      
      {/* WhatsApp Chatbot Widget */}
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Brash Havilah Chatbot"
        subtitle="Ask us anything!"
      />
    </div>
  );
};

export default ContactUs;

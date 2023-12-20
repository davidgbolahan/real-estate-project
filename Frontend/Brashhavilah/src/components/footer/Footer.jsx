import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className='Container-wrapper'>
        <div className='col'>
          <h2>Our Mission</h2>
          <p>
            We are dedicated to empowering our clients throughout their real estate journey. Our mission is to simplify the process of buying, selling, or renting properties by providing unparalleled expertise, personalized attention, and innovative solutions.
          </p>

        </div>
        <div className='col1'>
          <h2>Contacts</h2>
          <span>Phone: +123 9081098697</span>
          <span><a href="">Youtube: <FaYoutube/></a></span>
          <span> <a href="https://github.com/davidgbolahan"> Github: <FaGithub /></a></span>
          <span><a href="">Facebook: <FaFacebook /></a></span>
          <span><a href="">Instagram: <FaInstagramSquare /> </a></span>
        </div>
        <div className='col2'>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Nigeria</span>
          <span>Current Location: Lagos</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
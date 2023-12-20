import React from 'react'
import './Newsletter.css'
import { PiCursorClickFill } from "react-icons/pi";


const Newsletter = () => {
  return (
        <div className="container">
            <div className="offer-container">
                <div className="latest-offers">
                    <h5>Do you want to get our latest offers?</h5>
                    <h2>Send us your email and we will do the rest</h2>

                </div>
                <div className="inputcontainer">
                    <input type="email" placeholder='Type email...'/>
                    <PiCursorClickFill className='sendicon' />

                </div>

        </div>
    </div>
  )
}

export default Newsletter
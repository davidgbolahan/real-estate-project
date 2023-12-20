import React from 'react'
import { FaFileImage } from "react-icons/fa";
import "../signup/SignUp.css"

const SignUp = () => {

  return (
    
    <div className='containers'>
      <div className='wrapper'>
        <h2>Sign Up</h2>
        <form>
          <input type="text" name="username" placeholder='Username...' />
          <input type="email" name="email" placeholder='Email...' />
          <label htmlFor="photo">Upload photo <FaFileImage /></label>
          <input id="photo" type="file" style={{display: 'none'}} />
          <input type="password" name="password" placeholder='password...'/>
          <button type="submit">Register</button>
          <p>Already have an account? </p>
        </form>

      </div>

    </div>
  )
}

export default SignUp

import '../signin/Signin.css'
import Navbar from '../navbar/Navbar'

const Signin = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='wrapper'>
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder='Email...' />
          <input type="password" placeholder='passsword...' />
          <button type="submit">Sign In</button>
        </form>
        <p> Dont have an account? <span><a href='./SignUp'> Sign Up</a></span> </p>
      </div>
    </div>
    </>
  )
}

export default Signin
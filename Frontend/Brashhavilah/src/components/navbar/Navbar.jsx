import '../navbar/Navbar.css'
import { BsFillHouseDoorFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className='wrap'>
        <a href='/backend' className='left'><p className='jio'> 
          Brash Havilah Real Estate <BsFillHouseDoorFill/></p>
        </a>
        <ul className='center'>
            <li className='listitem'>Home</li>
            <li className='listitem'>AboutUs</li>
            <li className='listitem'>Peoperties</li>
            <li className='listitem'>ContactUs</li>
        </ul>
        <div className='right'>
        <a id='btn' href='/SignUp'><button> SignUp</button></a>
        <a id='btn' href='/Signin'><button>Signin</button></a>
        </div>
      </div>
      </>
  )
}

export default Navbar
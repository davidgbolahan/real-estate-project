import '../navbar/Navbar.css'
import { BsFillHouseDoorFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <>
      <div className='wrap'>
        <a href='/' className='left'><p className='jio'> 
          Brash Havilah Real Estate <BsFillHouseDoorFill/></p>
        </a>
        <ul className='center'>
            <li className='listitem'><a href="/">Home</a></li>
            <li className='listitem'><a href="./about">Aboutus</a></li>
            <li className='listitem'><a href="./Properties">Properties</a></li>
            <li className='listitem'><a href="./contact">Contactus</a></li>
            <li className='listitem'><a href="./Newsletter">Newsletter</a></li>
            <li className='listitem'><a href="./Featuredproperty">Featuredproperty</a></li>
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
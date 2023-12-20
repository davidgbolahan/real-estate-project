
import './App.css'
// import Homepage from './components/homepage/Homepage'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'
import SignUp from './components/signup/SignUp'
import Signin from './components/signin/Signin'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
     <Signin/>
        <Navbar/>
       <Routes>
        <Route path='/Signup' element = { <SignUp/> } />
        <Route path='/Signin' element = { <Signin/> } />
       </Routes>
       
      
    
    </>
  );
}

export default App

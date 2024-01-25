// import Homepage from './components/homepage/Homepage'
// import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'
import SignUp from './components/signup/SignUp'
import Signin from './components/signin/Signin'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Homepage from './components/homepage/Homepage'
import AboutUs from './components/aboutus/AboutUs'
import ContactUs from './components/contactus/ContactUs';
import Properties from './components/properties/Properties';
import Newsletter from './components/newsletter/Newsletter';
import Featuredproperty from './components/Featuredproperty/Featuredproperty'


function App() {

  return (
    <>
        <Navbar/>
       <Routes>
        <Route path='/' element = { <Homepage/> } />
        <Route path='/about' element = { <AboutUs /> } />
        <Route path='/contact' element = { <ContactUs/> } />
        <Route path='/Properties' element = { <Properties/> } />
        <Route path='/newsletter' element = { <Newsletter/> } />
        <Route path='/Featuredproperty' element = { <Featuredproperty/> } />
        <Route path='/Signup' element = { <SignUp/> } />
        <Route path='/Signin' element = { <Signin/> } />
       </Routes>
       <Footer />
      
    
    </>
  );
}

export default App

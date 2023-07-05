import React from 'react'
import DatesCardContainer from '../components/DatesCardContainer'
import Footer from '../components/Footer'
import './Register.css'
import Header from '../components/Header'
// import { NavLink } from 'react-router-dom'


const Register = () => {
  return (
    <div className='page_container_reg'>
        <Header />
        <DatesCardContainer/>
        {/* <NavLink to={'/login'}> */}
          <button className='login_button'>Login</button> 
        {/* </NavLink> */}
        <button className='singin_button'>Sing in</button>
          
        <Footer/>

    </div>
  ) 
}

export default Register

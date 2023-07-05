import React from 'react'
import  EmailCardContainer  from '../components/EmailCardContainer'
import  Header  from '../components/Header'
import Footer  from '../components/Footer'
import './Login.css'
// import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='.page_container_log'>
        <Header />
        <EmailCardContainer/>
        <button className='login_button2'>Login</button>
        {/* <NavLink to={'/register'}> */}
      
        <Footer/>

    </div>
  )
}

export default Login

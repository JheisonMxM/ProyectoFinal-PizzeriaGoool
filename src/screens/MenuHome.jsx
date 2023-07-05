import React from 'react'
import MenuSlideV from '../components/MenuSlideV'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MenuHome = () => {
  return (
    <div className='menu-home'>
        <Header />
        <MenuSlideV />
        <Footer />
    </div>
  )
}

export default MenuHome
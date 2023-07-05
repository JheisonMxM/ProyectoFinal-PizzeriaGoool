import React from 'react'
import { ReviewContainer } from '../components/ReviewContainer'
import { Icon } from '@iconify/react';
import Footer from '../components/Footer'
import Header from '../components/Header'

const Reseñas = () => {
  return (
    <div className='app'>
       <Header />
       <ReviewContainer/>
       <Footer/>
    </div>
  )
}
export default Reseñas;
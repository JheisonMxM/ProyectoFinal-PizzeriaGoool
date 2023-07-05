import React from 'react'
import { ReviewCardContainer } from './ReviewCardContainer'
import "./ReviewContainer.css"
export const ReviewContainer = () => {
  return (
    <div className='Reviews-container'>
        <h2>Reseñas</h2>
        
        <ReviewCardContainer/>
        
    </div>
  )
}
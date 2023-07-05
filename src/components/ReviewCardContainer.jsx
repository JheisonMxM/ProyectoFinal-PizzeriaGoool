import React from 'react'
import "./ReviewCardContainer.css"
import { ReviewCard } from './ReviewCard'
export const ReviewCardContainer = () => {
  return (
    <div className='cards-container'>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/> 
    </div>
  )
}
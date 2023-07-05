import React from 'react'
import './InfoHead.css'
import { Icon } from '@iconify/react';

const InfoHead = () => {
  return (
    <div className='info-head'>
        <Icon icon="ep:arrow-left-bold" style={{color:"#58B96D", width:"24px", height:"24px"}} />
        <span className='info-tittle'>Informacion</span>
    </div>
  )
}

export default InfoHead
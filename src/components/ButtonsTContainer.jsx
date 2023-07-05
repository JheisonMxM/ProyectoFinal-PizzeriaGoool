import React from 'react'
import "./ButtonsTContainer.css"
// import { NavLink } from 'react-router-dom'
export const ButtonsTContainer = () => {
  return (
    <div className='buttons-container'>
      {/* <NavLink to={'/menu/mediana'}> */}
        <button className='med'>Medianas</button>
      {/* </NavLink> */}
      {/* <NavLink to={'/menu/grande'}> */}
        <button className='gran'>Grandes</button>
      {/* </NavLink> */}
      {/* <NavLink to={'/menu/familiar'}> */}
        <button className='fam'>familiares</button>
      {/* </NavLink> */}
      {/* <NavLink to={'/menu/stadium'}> */}
        <button className='stad'>stadium</button>
      {/* </NavLink> */}
    </div>
  )
}
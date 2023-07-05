import React from 'react'
import { ButtonsTContainer } from '../components/ButtonsTContainer'
import { PizzaEncabezado } from '../components/PizzaEncabezado'
import Header from '../components/Header'

const TamPizzas = () => {
  return (
    <div className="apT">
            <Header />
            <div className="page-pizza-tam-container">
              <PizzaEncabezado/>
              <ButtonsTContainer/>            
            </div>
    </div>
  )
}
export default TamPizzas;

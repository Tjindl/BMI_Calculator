import { useState } from 'react'

import './App.css'

function App() {

  const calculateBMI = () => {
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
    alert(`Your BMI is ${bmi}`)
  }

  

  return (
    <>
      <div className="heading-container">
        <h1> BMI Calculator</h1>
      </div>
      <div className='height-container'>
        <label>Height (cm): </label>
        <input type='number' id='height' />
      </div>
      <div className='weight-container'>
        <label>Weight (kg): </label>
        <input type='number' id='weight' />
      </div>
      <div className='button-container'>
      <button id='calculate' onClick={calculateBMI} className='calculate-button'>Calculate</button>
      </div>
      
    </>
  )
}

export default App

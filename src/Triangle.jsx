import React, { useState, useEffect } from 'react'
import Input from './Input'
import './styles/App.css'

const Triangle = () => {
  const [values, setValues] = useState({ base: 0, altura: 0 })
  const [triangleArea, setTriangleArea] = useState(0)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const { base, altura } =  values;
    const area = (base * altura) / 2;
    setTriangleArea(area)
  }, [values])

  return (
    <div className="main-container">
      <h1 className="title">Triangle</h1>
      <div className="inputs-container">
        <Input 
          id='base'
          name='base'
          onChange={onChange} 
          placeholder='Base' 
          type='number' />
        <Input 
          id='altura'
          name='altura'
          onChange={onChange}
          placeholder='Altura'
          type='number' />
        <h3> Triangle area: {triangleArea} cm </h3>
      </div>
    </div>
  )
}

export default Triangle
import React from 'react'

const Input = ({id, name, placeholder, type, value, onChange}) => {
  return (
    <>
      <input
        id={id} 
        name={name} 
        type={type || 'text'} 
        className="input" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </>
  )
}

export default Input
import React from 'react'

const Button = ({disabled, ref, id, children, onClick, action, className}) => {
  return (
    <>
      {
      action ?
        <button 
          id={id} 
          className={className} 
          onClick={() => onClick(action)}
          ref={ref}
          disabled={disabled}
          >
            {children}
          </button>
        :
        <button 
          id={id} 
          className={className} 
          onClick={(event) => onClick(event)}
          ref={ref}
          disabled={disabled}
          >
            {children}
            </button>
     }
    </>
  )
}

export default Button
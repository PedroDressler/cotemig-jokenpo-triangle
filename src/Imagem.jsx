import React from 'react'

const Imagem = ({src, height, width}) => {
  return (
    <img 
      src={src}
      width={width || height || 100} 
      height={height || width || 100}/>
  )
}

export default Imagem
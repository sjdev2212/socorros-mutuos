import React from 'react'
import doctor from '../images/medico.jpg'

const Picture1 = () => {
const divStyle = {
    backgroundImage: `url(${doctor})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center'}

  return (
    <div style={divStyle}
    
    ></div>
  )
}

export default Picture1
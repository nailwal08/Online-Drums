import React, { useState } from 'react';
import drumImg from './drum.png';

const Keys = () => {
  return (
    <div style={{ position: 'relative'}}>
    <img src={drumImg} alt="" className="remove-bg"  />
    <div style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>A</span>
    </div>
    <div style={{ position: 'absolute', top: '53%', left: '33%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>S</span>
    </div>
    <div style={{ position: 'absolute', top: '27%', left: '40%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>D</span>
    </div>
    <div style={{ position: 'absolute', top: '13%', left: '51%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>J</span>
    </div>
    <div style={{ position: 'absolute', top: '25%', left: '59%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>K</span>
    </div>
    <div style={{ position: 'absolute', top: '46%', left: '67%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bold', zIndex: '1' }}>
      <span>L</span>
    </div>
  </div>
  )
}

export default Keys

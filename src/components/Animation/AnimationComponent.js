import React, { useState } from 'react';
import './Animation.css';
import gsap from 'gsap'

function AnimationComponent() {
  const [tween, settween] = useState(null)
  // gsap.to(".square", {duration: 5, x: 600});


  const play = () => {
    settween(gsap.to(".square", { duration: 5, x: 600, rotation: 360 }))
  }
  return (
    <>
      <div className='square'></div>
      <button onClick={play}>Play</button>
      <button onClick={() => { tween.pause(); }}>Pause</button>
      <button onClick={() => { tween.reverse(); }}>Reverse</button>
    </>
  )
}

export default AnimationComponent
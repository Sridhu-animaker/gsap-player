import React, { useEffect, useState } from 'react';
import '../App.css'
import { gsap } from 'gsap';

const VideoPlayer = () => {

  const [tween, setTween] = useState(null);

  function init() {
    let images = gsap.utils.toArray(".gallery .img-wrapper")
    let tl = gsap.timeline({ repeat: -1 });
    gsap.set(".gallery", { visibility: 'visible' })
    // gsap.set(images, { opacity: 0 })
    images.forEach(function (image, index) {
      setTween(
        tl.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 5, ease: 'slow' })
      )

      // tl.set(image, { opacity: 1 })
      //   .fromTo(image, { filter: "contrast(0.5) brightness(6)" }, { filter: "contrast(1) brightness(1)", duration: 4, ease: "slow" })
      //   .to(image, { filter: "contrast(0.5) brightness(6)", duration: 0.8, ease: "slow" })
    });

    tl.to('test', { visibility: 'visible', opacity: 1, duration: 5 })
  }

  return (<>

    <div className="gallery">
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-cabanas.jpg" />
        <p className='para'>Hello!</p>
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-cliffs-orange-glow.jpg" />
        <p className='para'>This is second slide</p>
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-father-daughter.jpg" />
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-lighthouse.jpg" />
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-lookdown-green-hills.jpg" />
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-palm-sunset.jpg" />
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-surf.jpg" />
      </div>
      <div className='img-wrapper'>
        <img src="https://assets.codepen.io/32887/beach-gallery-bent-palm.jpg" />
      </div>
      <div className='img-wrapper'>
        {/* <img src="https://assets.codepen.io/32887/beach-gallery-bent-palm.jpg" /> */}
        <h1 className='test'>End of the slide</h1>
      </div>
    </div>
    <button onClick={() => init()}>Start</button>
    <button onClick={() => tween.play()}>Play</button>
    <button onClick={() => tween.pause()}>Pause</button>
    <button onClick={() => tween.reverse()}>Reverse</button>
  </>
  );
};

export default VideoPlayer;

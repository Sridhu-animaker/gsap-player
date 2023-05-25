import React, { useEffect, useState } from 'react';
import './Player.css'
import { gsap } from 'gsap';

const PlayerComponent = () => {

    const [tween, setTween] = useState(null);
    const [speed, setSpeed] = useState(1);
    const [rewindSpeed, setRewindSpeed] = useState(-1);
    function init() {
        const video = document.getElementById('myVideo');
        video.play();
        let tl = gsap.timeline();
        gsap.set(".gallery", { visibility: 'visible' })
        setTween(tl.to('#myVideo', { opacity: 1, duration: 10 })/* .add(function(){ video.play()}) */
            .to('.para1', { xPercent: 160, opacity: 1, duration: 6 }, '-=8')
            .to('.img-wrapper img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper p', { xPercent: 160, bottom: 0, opacity: 1 }, '-=3')
            .to('.img-wrapper p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper1 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper1 p', { xPercent: 50, bottom: 0, opacity: 1 }, '-=3')
            .to('.img-wrapper1 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper2 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper2 p', { xPercent: 50, bottom: 0, opacity: 1 }, '-=3')
            .to('.img-wrapper2 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper3 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper3 p', { xPercent: 45, bottom: 0, opacity: 1 }, '-=3')
            .to('.img-wrapper3 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper4 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper4 p', { xPercent: 50, bottom: 0, opacity: 1 }, '-=3')
            .to('.img-wrapper4 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper5 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper5 p', { xPercent: 20, color: 'yellow', bottom: 0, opacity: 1 }, '-=3'))
    }

    const fastForward = () => {
        debugger
        if (speed == 1) {
            setSpeed(1.5);
            tween.timeScale(1.5);
        } else if (speed == 1.5) {
            setSpeed(2);
            tween.timeScale(2);
        } else if (speed == 2) {
            setSpeed(1);
            tween.timeScale(1);
        }

    }
    const fastRewind = () => {
        debugger
        if (rewindSpeed == -1) {
            setRewindSpeed(-1.5);
            tween.timeScale(-1.5);
        } else if (rewindSpeed == -1.5) {
            setRewindSpeed(-2);
            tween.timeScale(-2);
        } else if (rewindSpeed == -2) {
            setRewindSpeed(-1);
            tween.timeScale(-1);
        }

    }

    const resetSettings = () => {
        setSpeed(1);
        setRewindSpeed(-1);
        tween.progress(0);
        tween.timeScale(1);
        document.getElementById('myVideo').play();
    }

    return (<>

        <div className="gallery">
            <video id='myVideo' src='https://www.w3schools.com/html/mov_bbb.mp4' autoPlay />
            <p className='para para1'>Welcome!</p>
            <div className='img-wrapper'>
                <img src="https://assets.codepen.io/32887/beach-gallery-cabanas.jpg" />
                <p className='para'>Hello There!</p>
            </div>
            <div className='img-wrapper1'>
                <img src="https://assets.codepen.io/32887/beach-gallery-cliffs-orange-glow.jpg" />
                <p className='para'>This is the second slide</p>
            </div>
            <div className='img-wrapper2'>
                <img src="https://assets.codepen.io/32887/beach-gallery-lookdown-green-hills.jpg" />
                <p className='para'>This is the Third slide</p>
            </div>
            <div className='img-wrapper3'>
                <img src="https://assets.codepen.io/32887/beach-gallery-surf.jpg" />
                <p className='para'>This is the Fourth slide</p>
            </div>
            <div className='img-wrapper4'>
                <img src="https://assets.codepen.io/32887/beach-gallery-bent-palm.jpg" />
                <p className='para'>This is the Fifth slide</p>
            </div>
            <div className='img-wrapper5'>
                <img src="https://assets.codepen.io/32887/beach-gallery-palm-sunset.jpg" />
                <p className='para'>Thankyou for watching!</p>
            </div>
        </div>
        <button onClick={() => init()}>Start Video</button>

        {tween && <><button onClick={() => {
            tween.play();
            document.getElementById('myVideo').play();
        }}>Play</button>
            <button onClick={() => {
                tween.pause();
                document.getElementById('myVideo').pause();
            }}>Pause</button>
            <button onClick={() => tween.reverse()}>Reverse</button>
            <button onClick={fastForward}>Forward {speed}x {speed > 1 && '>>'}</button>
            <button onClick={fastRewind}>Rewind {Math.abs(rewindSpeed)}x {rewindSpeed > 1 && '<<'}</button>
            <button onClick={resetSettings}>Reset</button></>}
    </>
    );
};

export default PlayerComponent;

import React, { useEffect, useState } from 'react';
import './Player.css'
import { gsap } from 'gsap';

const PlayerComponent = () => {
    // const urls = ['../../Assets/sample-3s.mp3', '../../Assets/sample-9s.mp3', '../../Assets/sample-12s.mp3', '../../Assets/sample-15s.mp3']
    const urls = ['https://library.animaker.com/animaker/music/looking-on-bright-side.mp3', 'https://dash.animaker.com/a/u/rqlnsljfwt/audio/DTWXU.mp3']

    const [tween, setTween] = useState(null);
    const [speed, setSpeed] = useState(1);
    const [rewindSpeed, setRewindSpeed] = useState(-1);
    const [isPause, setIsPause] = useState(false);
    const [volume, setVolume] = useState(10);
    const [volume2, setVolume2] = useState(10);
    // const [volume3, setVolume3] = useState(10);
    const audioCtx = new AudioContext();
    // audioCtx.suspend();

    function init() {
        resetSettings();
        const video = document.getElementById('myVideo');
        const video1 = document.getElementById('myVideo-1');
        video.play();
        video1.play();
        let tl = gsap.timeline();
        gsap.set(".gallery", { visibility: 'visible' })
        setTween(tl.to('#myVideo', { opacity: 1, duration: 10 })
            .to('#myVideo-1', { opacity: 1, duration: 15 }, '-=10')
            .to('.para1', { xPercent: 160, opacity: 1, duration: 6 }, '-=8')
            .to('.img-video', { opacity: 1, duration: 5, height: '200px', width: '400px', right: 0, ease: 'slow' }, '-=8')
            .to('.img-wrapper img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper p', { xPercent: 160, bottom: 144, opacity: 1 }, '-=3')
            .to('.img-wrapper p', { xPercent: 0, opacity: 0 })

            .to('#myVideo', { duration: 2, height: '200px', width: '400px', zIndex: 2, bottom: '182px', left: '-18px' }, '-=5')
            .to('.img-wrapper1 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper1 p', { xPercent: 160, bottom: 144, opacity: 1 }, '-=3')
            .to('.img-wrapper1 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper2 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper2 p', { xPercent: 160, bottom: 144, opacity: 1 }, '-=3')
            .to('.img-wrapper2 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper3 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper3 p', { xPercent: 160, bottom: 144, opacity: 1 }, '-=3')
            .to('.img-wrapper3 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper4 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper4 p', { xPercent: 160, bottom: 144, opacity: 1 }, '-=3')
            .to('.img-wrapper4 p', { xPercent: 0, opacity: 0 })

            .to('.img-wrapper5 img', { opacity: 1, duration: 5, ease: 'slow' })
            .to('.img-wrapper5 p', { xPercent: 20, color: 'yellow', bottom: '330px', opacity: 1 }, '-=3')
            .add(() => {
                document.getElementById('myVideo').pause();
                document.getElementById('myVideo').currentTime = 0;
                document.getElementById('myVideo-1').pause();
                document.getElementById('myVideo-1').currentTime = 0;
            })
        );


    }

    const pausePlay = () => {
        setIsPause(!isPause)
        if (!isPause) {
            tween.pause();
            document.getElementById('myVideo').pause();
            document.getElementById('myVideo-1').pause();
            document.getElementById('0').pause();
            document.getElementById('1').pause();
            stopAudio();
        } else {
            tween.play();
            document.getElementById('myVideo').play();
            document.getElementById('myVideo-1').play();
            document.getElementById('0').play();
            document.getElementById('1').play();
        }
    }

    const fastForward = () => {
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
        if (tween) {
            tween.progress(0);
            tween.timeScale(1);
        }
        document.getElementById('myVideo').currentTime = 0;
        document.getElementById('myVideo-1').currentTime = 0;
    }

    const playAudios = () => {
        let audioTags = document.getElementById('audios').getElementsByTagName('audio');

        while (audioTags.length > 0) {
            audioTags[0].parentNode.removeChild(audioTags[0]);
        }

        urls.map((url, id) => {
            console.log(url);
            let audio = new Audio();
            audio.crossOrigin = "anonymous";
            audio.id = id;
            document.getElementById('audios').appendChild(audio);
            let srcNode = audioCtx.createMediaElementSource(audio);
            let gainNode = audioCtx.createGain();
            srcNode.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            gainNode.gain.value = 1;
            audio.src = url;
            audio.volume = 1;
            // audio.controls = true;
            audio.loop = true;
            console.log(audio);

            audio.play();
            audioCtx.resume();
        });
    }

    const stopAudio = () => {
        // audioCtx.close();
        document.getElementById('0').pause();
        document.getElementById('1').pause();
        audioCtx.suspend();
    }

    const changeVolume = (e) => {
        setVolume(e.target.value);
        document.getElementById('0').volume = e.target.value;
    }
    const changeVolume2 = (e) => {
        setVolume2(e.target.value);
        document.getElementById('1').volume = e.target.value;
    }

    return (
        <>
            <div className="gallery">
                <video id='myVideo' className='myVideo' src='https://www.w3schools.com/html/mov_bbb.mp4' autoPlay loop />
                <video id='myVideo-1' className='myVideo' src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' autoPlay loop />
                <p className='para para1'>Welcome!</p>
                <img className='img-video' src='https://assets.codepen.io/32887/beach-gallery-lighthouse.jpg' />
                <div className='img-wrapper'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-cabanas.jpg" />
                    <p className='para'>Hello There!</p>
                </div>
                <div className='img-wrapper1'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-cliffs-orange-glow.jpg" />
                    <p className='para'>Second slide</p>
                </div>
                <div className='img-wrapper2'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-lookdown-green-hills.jpg" />
                    <p className='para'>Third slide</p>
                </div>
                <div className='img-wrapper3'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-surf.jpg" />
                    <p className='para'>Fourth slide</p>
                </div>
                <div className='img-wrapper4'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-bent-palm.jpg" />
                    <p className='para'>Fifth slide</p>
                </div>
                <div className='img-wrapper5'>
                    <img src="https://assets.codepen.io/32887/beach-gallery-palm-sunset.jpg" />
                    <p className='para'>Thankyou for watching!</p>
                </div>
            </div>
            <button onClick={() => { init(); playAudios(); }}>Start Video</button>
            {tween && <>
                <button onClick={pausePlay}>{isPause ? 'Play' : 'Pause'}</button>
                <button onClick={() => tween.reverse()}>Reverse</button>
                <button onClick={fastForward}>Forward {speed}x {speed > 1 && '>>'}</button>
                <button onClick={fastRewind}>Rewind {Math.abs(rewindSpeed)}x {rewindSpeed > 1 && '<<'}</button>
                <button onClick={resetSettings}>Reset</button>
            </>}
            <h3 style={{ color: 'white' }}>Audio Section:</h3>
            <div id='audios'>
                <h4 style={{ color: 'white' }}>Volume 1:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={volume}
                    onChange={changeVolume}></input>
                <h4 style={{ color: 'white' }}>Volume 2:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={volume2}
                    onChange={changeVolume2}></input>
                <button onClick={playAudios}>Play Audio</button>
                <button onClick={stopAudio}>Pause Audio</button>
            </div>
        </>
    );
};

export default PlayerComponent;

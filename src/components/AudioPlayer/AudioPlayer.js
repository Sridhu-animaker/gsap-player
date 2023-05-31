import React, { Component } from 'react';
import sample1 from '../../Assets/sample-3s.mp3';
import sample2 from '../../Assets/sample-9s.mp3';
import sample3 from '../../Assets/sample-12s.mp3';
import sample4 from '../../Assets/sample-15s.mp3';

// Hard coded audio component
export class AudioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            volume: 10,
            volume2: 10,
            volume3: 10
        }
        this.audioRef1 = React.createRef();
        this.audioRef2 = React.createRef();
        this.audioRef3 = React.createRef();
        this.audioCtx = new AudioContext();
        // this.audioCtx.suspend();
        this.urls = ['../../Assets/sample-3s.mp3', '../../Assets/sample-9s.mp3', '../../Assets/sample-12s.mp3', '../../Assets/sample-15s.mp3']
        // this.urls = ['https://file-examples.com/storage/fe629099fc646eff79529f9/2017/11/file_example_MP3_700KB.mp3']
    }

    componentDidMount() {
    }

    playAudio = () => {
        let srcNode = this.audioCtx.createMediaElementSource(this.audioRef1.current);
        let gainNode = this.audioCtx.createGain();
        srcNode.connect(gainNode);

        // 2nd audio
        let srcNode2 = this.audioCtx.createMediaElementSource(this.audioRef2.current);
        let gainNode2 = this.audioCtx.createGain();
        srcNode2.connect(gainNode2);
        gainNode2.connect(this.audioCtx.destination);

        // 3rd audio
        let srcNode3 = this.audioCtx.createMediaElementSource(this.audioRef3.current);
        let gainNode3 = this.audioCtx.createGain();
        srcNode3.connect(gainNode3);
        gainNode3.connect(this.audioCtx.destination);


        gainNode.connect(this.audioCtx.destination);
        this.audioRef1.current.volume = 1;
        // this.audioRef1.current.currentTime = 0;
        this.audioRef1.current.play();
        this.audioRef2.current.play();
        this.audioRef3.current.play();
        this.audioCtx.resume();
    }

    playAudios = () => {
        this.urls.map((url, id) => {
            debugger
            console.log(url);
            let audio = new Audio();
            audio.crossOrigin = "anonymous";
            audio.id = id;
            document.body.appendChild(audio)
            let srcNode = this.audioCtx.createMediaElementSource(audio);
            let gainNode = this.audioCtx.createGain();
            srcNode.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            audio.src = url;
            audio.volume = 1;
            audio.controls = true;
            audio.play();
            this.audioCtx.resume();
        });
    }

    stopAudio = () => {
        this.audioCtx.close()
    }

    changeVolume = (e) => {
        this.setState({ volume: e.target.value })
        this.audioRef1.current.volume = e.target.value;
    }
    changeVolume2 = (e) => {
        this.setState({ volume2: e.target.value })
        this.audioRef2.current.volume = e.target.value;
    }
    changeVolume3 = (e) => {
        this.setState({ volume3: e.target.value })
        this.audioRef3.current.volume = e.target.value;
    }

    render() {
        return (
            <div>
                <audio ref={this.audioRef1} controls loop >
                    <source src={sample1} />
                </audio>
                <audio ref={this.audioRef2} controls loop>
                    <source src={sample2} />
                </audio>
                <audio ref={this.audioRef3} controls loop>
                    <source src={sample3} />
                </audio>
                <button onClick={this.playAudio}>Play</button>
                <button onClick={this.stopAudio}>Stop</button>
                <h4 style={{ color: 'white' }}>Volume:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume}
                    onChange={this.changeVolume}></input>
                <h4 style={{ color: 'white' }}>Volume 2:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume2}
                    onChange={this.changeVolume2}></input>
                <h4 style={{ color: 'white' }}>Volume 3:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume3}
                    onChange={this.changeVolume3}></input>
            </div>
        )
    }
}

export default AudioComponent;
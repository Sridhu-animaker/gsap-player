import React, { Component } from 'react';
// import sample1 from '../../Assets/sample-3s.mp3';
// import sample2 from '../../Assets/sample-9s.mp3';
// import sample3 from '../../Assets/sample-12s.mp3';
// import sample4 from '../../Assets/sample-15s.mp3';

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
        // this.urls = ['../../Assets/sample-3s.mp3', '../../Assets/sample-9s.mp3', '../../Assets/sample-12s.mp3', '../../Assets/sample-15s.mp3']
        this.urls = ['https://library.animaker.com/animaker/music/looking-on-bright-side.mp3', 'https://dash.animaker.com/a/u/rqlnsljfwt/audio/DTWXU.mp3']
    }

    playAudios = () => {
        let audioTags = document.getElementById('audios').getElementsByTagName('audio');

        while (audioTags.length > 0) {
            audioTags[0].parentNode.removeChild(audioTags[0]);
        }

        this.urls.map((url, id) => {
            console.log(url);
            let audio = new Audio();
            audio.crossOrigin = "anonymous";
            audio.id = id;
            document.getElementById('audios').appendChild(audio);
            let srcNode = this.audioCtx.createMediaElementSource(audio);
            let gainNode = this.audioCtx.createGain();
            srcNode.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            gainNode.gain.value = 1;
            audio.src = url;
            audio.volume = 1;
            audio.controls = true;
            audio.loop = true;
            console.log(audio);

            audio.play();
            this.audioCtx.resume();
        });
    }

    stopAudio = () => {
        // this.audioCtx.close();
        this.audioCtx.suspend();
    }

    changeVolume = (e) => {
        this.setState({ volume: e.target.value })
        document.getElementById('0').volume = e.target.value;
    }
    changeVolume2 = (e) => {
        this.setState({ volume2: e.target.value })
        document.getElementById('1').volume = e.target.value;
    }

    render() {
        return (
            <div>
                <div id='audios'></div>

                <h4 style={{ color: 'white' }}>Volume 1:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume}
                    onChange={this.changeVolume}></input>
                <h4 style={{ color: 'white' }}>Volume 2:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume2}
                    onChange={this.changeVolume2}></input>
                {/* <h4 style={{ color: 'white' }}>Volume 3:</h4>
                <input id="slide" type="range" min="0" max="1" step="0.1" value={this.state.volume3}
                    onChange={this.changeVolume3}></input> */}
                <button onClick={this.playAudios}>Play</button>
                <button onClick={this.stopAudio}>Stop</button>
            </div>
        )
    }
}

export default AudioComponent;
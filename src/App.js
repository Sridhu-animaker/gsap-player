import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import AnimationComponent from './components/Animation/AnimationComponent';
import PlayerComponent from './components/Player/PlayerComponent';

const App = () => {
  return (
    <div className='app'>
      <h1>React GSAP Video Player</h1>
      {/* <VideoPlayer /> */}
      <PlayerComponent />
      {/* <AnimationComponent /> */}
      
    </div>
  );
};

export default App;

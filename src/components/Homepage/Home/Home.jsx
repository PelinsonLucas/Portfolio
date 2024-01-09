import React, {useCallback} from 'react';
import './Home.css'; // Assuming you have a corresponding CSS file
import Particles from 'react-tsparticles';

import profile from '../../Assets/profile.jpeg';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const Home = () => {

  const options = {
    fullScreen: {
        enable: false,
        zIndex: 0,
    },
    preset: "stars",
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadStarsPreset(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

  return (
    <div id="home" className="home-section">
      <div className="background"></div>
      <Particles
            id = "tsparticles"
            height='400px'
            width='800px'
            className='animated hide'
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}/>
      <div className='info-container animated hide'>
        <img src={profile} alt="Profile" className="profile-picture"/>      
        <div className="texts">
          <h1 className="greeting">Hello, I'm Lucas Pelinson</h1>
          <p className="introduction">I'm a Software Developer. </p>
        </div>
      </div>      
    </div>
  );
};

export default Home;
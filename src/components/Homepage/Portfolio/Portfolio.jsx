import React from 'react';
import './Portfolio.css'; 
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";


import weatherappIcon from '../../Assets/weatherapp.png';
import riffRunnerIcon from '../../Assets/RiffRunner.png';

const Portfolio = () => {

  const goToLink = (link) => {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div id="portfolio" className="portfolio-section">
      <h2 className="section-title animated">My Projects</h2>
      <div className="projects">
        <button className="project animated hide" onClick={() => goToLink('https://pelinsonlucas.github.io/WeatherApp/')}>
          <div className="project-icon-container">
            <img src={weatherappIcon} alt="WeatherApp Icon" className="project-icon" />
          </div>
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">A simple weather app using React.js</p>
          <div className='techStack-icons'>
            <FaReact />
          </div>
        </button>
        
        <button className="project animated hide" onClick={() => goToLink('https://github.com/tcpassos/RiffRunner')}>
          <div className="project-icon-container">
            <img src={riffRunnerIcon} alt="WeatherApp Icon" className="project-icon" />
          </div>
          <h3 className="project-title">RiffRunner</h3>
          <p className="project-description">A Guitar Hero clone game, created in partnership with a colleague for the Computer Graphics course using C++, GLFW and GLAD.</p>
          <div className='techStack-icons'>
            <TbBrandCpp />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
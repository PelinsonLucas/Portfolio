import React from 'react';
import './Portfolio.css'; 

import weatherappIcon from '../../Assets/weatherapp.png';

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
        <a className="project animated hide" onClick={() => goToLink('https://pelinsonlucas.github.io/WeatherApp/')}>
          <div className="project-icon-container">
            <img src={weatherappIcon} alt="WeatherApp Icon" className="project-icon" />
          </div>
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">A simple weather app using React.js</p>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
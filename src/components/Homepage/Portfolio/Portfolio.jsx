import React from 'react';
import './Portfolio.css'; 

import weatherappImg from '../../Assets/weatherapp.png';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-section">
      <h2 className="section-title animated">My Projects</h2>
      <div className="projects animated">
        <a className="project" href='https://pelinsonlucas.github.io/weatherapp/'>
          <h3 className="project-title">WeatherApp</h3>
          <p className="project-description">A simple weather app using .</p>
          <img src={weatherappImg} alt="Project 1 Screenshot" className="project-screenshot" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
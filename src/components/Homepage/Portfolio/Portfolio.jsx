import React, { useEffect } from 'react';
import './Portfolio.css'; 
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


import weatherappIcon from '../../Assets/weatherapp.png';
import riffRunnerIcon from '../../Assets/RiffRunner.png';
import chatAppIcon    from '../../Assets/chatApp.png';

const Portfolio = () => {

  useEffect(() => {
  document.getElementById("projects").addEventListener("wheel", (wheel) =>{
    wheel.preventDefault();
    wheel.stopPropagation();
    if (wheel.deltaY > 0)
      document.getElementById("projects").scrollBy(100, 0);
    else
      document.getElementById("projects").scrollBy(-100, 0);
    });
  }, []);

  const goToLink = (link) => {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div id="portfolio" className="portfolio-section">
      <h2 className="section-title animated">My Projects</h2>
      <div className="projects-container">
        <span className='left-gradient'></span>
        <div id="projects" className="projects">
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
              <img src={riffRunnerIcon} alt="RiffRunner Icon" className="project-icon" />
            </div>
            <h3 className="project-title">RiffRunner</h3>
            <p className="project-description">A Guitar Hero clone game, created in partnership with a colleague for the Computer Graphics course using C++, GLFW and GLAD.</p>
            <div className='techStack-icons'>
              <TbBrandCpp />
            </div>
          </button>

          <button className="project animated hide" onClick={() => goToLink('https://pelinsonlucas.github.io/chatapp/#/')}>
            <div className="project-icon-container">
              <img src={chatAppIcon} alt="Chat App Icon" className="project-icon" />
            </div>
            <h3 className="project-title">Chat App</h3>
            <p className="project-description">A Whatsapp clone application, created using React.js, Node.js and MongoDB.</p>
            <div className='techStack-icons'>
              <FaReact />
              <FaNode />
              <SiMongodb />
            </div>
          </button>
        </div>
        <span className='right-gradient'></span>
      </div>
    </div>
  );
};

export default Portfolio;
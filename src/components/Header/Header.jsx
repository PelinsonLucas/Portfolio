import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header className={`header ${isMenuVisible ? 'visible' : ''}`}>
        <nav className="nav">
          <ul className='nav-list'>
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item light-gray"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li className="nav-item light-gray"><a href="#contact" className="nav-link">Contact</a></li>
            <li className="nav-item">
              <a className={`${isMenuVisible ?  'menu-button active' : 'menu-button'}`} onClick={toggleMenu}>
                <span />
              </a>
            </li>
          </ul>
        </nav> 
      </header>
      <div className={`spacer ${isMenuVisible ? 'visible' : ''}`}> </div>
    </>
  );
};

export default Header;
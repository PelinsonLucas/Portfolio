import React from 'react';
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import './Contact.css';

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/lucas-pelinson/',
      '_blank'
    );
  };

  const handleGitHubClick = () => {
    window.open(
      'https://github.com/PelinsonLucas',
      '_blank'
    );
  };

  const handleEmailClick = () => {
    window.open(
      'mailto:pelinsonlucas@gmail.com',
      '_blank'
    );
  };

  const handleWhatsappClick = () => {
    window.open(
      'https://wa.me/+5551995160064',
      '_blank'
    );
  };

  return (
    <div id='contact' className='contact-container'>
      <h1 className='animated hide'>Contact information</h1>
      <p className='animated hide'>
        Feel free to contact me through any of the links below!
      </p>
      <div className='buttons animated hide'>
        <button className='button linkedin' onClick={handleLinkedInClick}>
          <FaLinkedinIn className='icon' size={50} />
        </button>
        <button className='button github' onClick={handleGitHubClick}>
          <FaGithub className='icon' size={50} />
        </button>
        <button className='button gmail' onClick={handleEmailClick}>
          <SiGmail className='icon' size={50} />
        </button>
        <button className='button whatsapp' onClick={handleWhatsappClick}>
          <FaWhatsapp className='icon' size={50} />
        </button>
      </div>
    </div>
  );
};

export default Contact;

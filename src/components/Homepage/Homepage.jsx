import {React, useRef, useEffect} from 'react'
import './Homepage.css'
import Home from './Home/Home.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Contact from './Contact/Contact.jsx'


export const Homepage = () => {

  const observer = useRef(); // Use useRef to persist observer across renders

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.remove('hide');
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.add('hide');
        }
      });
    });

    const divs = document.querySelectorAll('.animated');
    divs.forEach((div) => {
      observer.current.observe(div);
    });

    // Clean up function to stop observing when component unmounts
    return () => {
      if (observer.current) {
        divs.forEach((div) => {
          observer.current.unobserve(div);
        });
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <>
      <div className='homepage-container'>
        <Home/>
        <Portfolio/>
        <Contact/>
      </div>
    </>
  )
}

export default Homepage
import React from 'react';
import '../styles/footer.css';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
        <a href="https://instagram.com/zeenat.yameen" target="_blank" rel="noopener noreferrer">
    <i className="bx bxl-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/in/zeenat-yameen-0168a829b" target="_blank" rel="noopener noreferrer">
    <i className="bx bxl-linkedin"></i>
  </a>
  <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
    <i className="bx bxl-facebook"></i>
  </a>
        </div>

        <ul className='list'>
            <li>
                <a href="#education">FAQ</a>
            </li>

            <li>
                <a href="#services">Services</a>
            </li>

            <li>
                <a href="#hero">About Me</a>
            </li>

            <li>
                <a href="#projects">Projects</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
            </ul>
            <p className='copyright'>
                @ Zeenat Yameen | All Rights Reserved
            </p>
      
    </div>
  )
}

export default Footer

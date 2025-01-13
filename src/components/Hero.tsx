import React from 'react';
import Navbar from './Navbar';
import '../styles/Hero.css';
import Image from 'next/image';


const Hero = () => {
  return (
    <div id="hero" className='home'>
      <div className='home-content'>
<h1>Hi, it is <span>Zeenat Yameen</span></h1>
<h3 className="text-animation">I am learning <span></span></h3>
<p>
I am currently learning about Web3, the Metaverse and AI through GIAIC.
I am deeply passionate about building a career in the Tech field, 
which is why I am constantly learning new skills and 
expanding my knowledge to drive advancements in my career
</p>

<div className="social-icons">
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


  <div className='btn-group'>
    <a href="#" className='btn'>Hire</a>
    <a href="#contact"
    className='btn'>Contact</a>
  </div>
  </div>

  <div className='home-img'>
    <Image src="/imagesforproject.png" alt="images"
    width={400}
    height={300}/>
    </div>
      <Navbar />
    </div>
  )
}

export default Hero
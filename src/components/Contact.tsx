import React from 'react';
import '../styles/contact.css';


const Contact = () => {
  return (
    <div id="contact" className='contact'>
        <h2 className='heading'>Contact <span>Me</span></h2>

        <form action="">
            <div className='input-group'>
                <div className='input-box'>
                    <input type= "text" 
                    placeholder="Full Name"></input>
                    <input type= "email" 
                    placeholder="Email"></input>
                </div>

                <div className='input-box'>
                    <input type="number"
                    placeholder="Phone Number"></input>
                    <input type="text"
                    placeholder="Subject"></input>
                </div>
            </div>

            <div className='input-group-2'>
                <textarea name="" id="" cols={30} rows={10} 
                placeholder="Your 
                Message"></textarea>
                <input type="Submit" value="Send Message" className='btn'></input>
            </div>
        </form>
      
    </div>
  )
}

export default Contact

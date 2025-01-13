import React from 'react';
import '../styles/projects.css';
import Image from 'next/image';


const Projects = () => {
  return (
    <div id="projects" className='projects'>
        <div className='projects-box'>
            <h2 className='heading'>Projects</h2>
            <div className='wrapper'>

                <div className='projects-item'>
                    <Image src="/project 9.jpg" alt=""
                    width={400}
                    height={300} />
                   <h2>Shareable Resume Builder </h2>
                   <div className='rating'>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>

                   </div>
                   <p>I have created a shareable resume builder that enables users to design and customize their resumes, 
                    and then share them directly with potential employers or clients. This tool allows users 
                    to input and edit details and more all within an 
                    interactive interface. Once the resume is complete, users can generate a shareable link or download 
                    a PDF version for easy distribution.</p>

                    
                </div>

                <div className='projects-item'>
                    <Image src="/project 7.jpg" alt=""
                    width={400}
                    height={300}  />
                   <h2>Static Interactive Resume </h2>
                   <div className='rating'>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>

                   </div>
                   <p>I have created a static interactive resume using HTML,
                     designed to present my professional background in an engaging and user-friendly manner.
                      The resume includes sections for personal information, education, and skills, 
                      all laid out in a clean and organized format.</p>

                    
                </div>

                <div className='projects-item'>
                    <Image src="/project 8.JPG" alt="" 
                    width={400}
                    height={300} />
                   <h2>Editable Resume Builder </h2>
                   <div className='rating'>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>
                   <i className='bx bxs-star' id="star"></i>

                   </div>
                   <p>I have developed an editable resume builder that allows users
                     to easily create and customize their resumes in a simple, intuitive interface. 
                     This tool enables users to input and modify personal information, education, 
                     work experience, skills, and other key details,to create a professional resume 
                     tailored to their unique qualifications and career goals.</p>

                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects

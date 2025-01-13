import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="heading">Services</h1>

      <div className="services-container">
        <div className="services-box">
          <div className="services-info">
            <h4>UI Design</h4>
            <p>
              As a UI (User Interface) designer, my primary goal is to create
              visually appealing and functional designs that enhance the
              user&apos;s experience when interacting with digital products. I
              focus on ensuring that each interface is not only aesthetically
              pleasing but also intuitive and easy to navigate. My role involves
              collaborating closely with developers, product managers, and other
              stakeholders to design wireframes, prototypes, and interactive
              elements.
            </p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-info">
            <h4>Frontend Development</h4>
            <p>
              I am currently learning frontend development, and it&apos;s been
              an exciting journey so far. I am gaining a deeper understanding of
              how websites and web applications are built from the ground up,
              focusing on the visual and interactive aspects that users engage
              with. I have started learning core technologies like HTML, CSS,
              and JavaScript, which form the foundation of frontend development.
            </p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-info">
            <h4>Backend Development</h4>
            <p>
              I am currently learning Backend development, and it&apos;s been an
              exciting journey so far. I am gaining a deeper understanding of
              how websites and web applications are built from the ground up,
              focusing on the fully functional and interactive aspects that
              users engage with. I have started learning core technologies that
              form the foundation of Backend development.
            </p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-info">
            <h4>Testing</h4>
            <p>
              I am actively learning and developing my skills in software
              testing, focusing on unit, integration, and end-to-end testing to
              ensure software quality. I am exploring tools like Selenium,
              Cypress, or Jest to automate testing processes and improve
              efficiency. My learning journey includes understanding how to
              identify edge cases and implement effective testing strategies.
              Additionally, I am gaining experience with integrating testing
              into CI/CD pipelines to support seamless and reliable software
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

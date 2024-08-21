import "./about.css"
import "../../index.css"
import ME from "../../images/img.png"
import { BsAward } from "react-icons/bs"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { AiOutlineFolderAdd } from "react-icons/ai"
import React, { useState } from 'react';

const About = () => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    if(showFullDescription){
      window.location.href = "#about";
    }
  };


  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
              <img src={ME} alt="image of collins abu" />
            </div>
            <div className="about_content">
              <div className="about_cards">
                  <article className="about_card">
                    <BsAward className="about_icon"/>
                    <h5>Experience</h5>
                    <small>5 years + </small>
                  </article>

                  <article className="about_card">
                    <AiOutlineUsergroupAdd className="about_icon"/>
                    <h5>Clients</h5>
                    <small>35  WorldWide</small>
                  </article>

                  <article className="about_card">
                    <AiOutlineFolderAdd className="about_icon"/>
                    <h5>Project</h5>
                    <small>20+ completed</small>
                  </article>
              </div>

            { showFullDescription ? (
                <>
               <p> Hello there! I'm Collins Abu, a passionate and versatile frontend developer with a 
                  keen eye for design. With one year of hands-on experience as a frontend developer
                   and five years of expertise in graphics and UI design, I bring a unique blend of 
                   technical and creative skills to the table.


                <p>As a frontend developer, I thrive on crafting intuitive and engaging user experiences using 
                HTML, CSS, JavaScript, and React JS. I enjoy transforming complex ideas into clean, responsive, 
                and accessible web interfaces that not only meet the client's objectives but also exceed user expectations.
                My attention to detail and commitment to creating pixel-perfect designs ensure that every website I build 
                is visually stunning and seamlessly functional across various devices and browsers.</p>


              <p>Prior to diving into the world of frontend development, I spent five years honing my skills as a graphics and UI designer. 
              This background allows me to approach web development from a design-centric perspective, enabling me to create visually appealing
              layouts and captivating visual elements. My extensive experience in graphic design has given me a deep understanding of color
                theory, typography, and composition, which I seamlessly incorporate into my frontend development work.</p>

              I am constantly exploring new design trends, staying up-to-date with the latest industry standards and best 
                practices to deliver modern and innovative solutions. Combining my technical expertise and artistic flair, I 
                strive to bring ideas to life and deliver remarkable digital experiences that captivate and engage users.</p>

                <p>If you're seeking a frontend developer who can seamlessly blend design and functionality, I'd love to connect with you. 
                  Let's collaborate and create something exceptional together. </p>
                <button onClick={toggleDescription} className="btn btn-primary">Read Less</button>
                </>  
              ) : (
                <>
                <p> Hello there! I'm Collins Abu, a passionate and versatile frontend developer with a 
                  keen eye for design. With one year of hands-on experience as a frontend developer
                   and five years of expertise in graphics and UI design, I bring a unique blend of 
                   technical and creative skills to the table. <br/><br />


                As a frontend developer, I thrive on crafting intuitive and engaging user experiences using 
                HTML, CSS, JavaScript, and React JS. I enjoy transforming complex ideas into clean, responsive, 
                and accessible web interfaces that not only meet the client's objectives but also exceed user expectations.
                My attention to detail and commitment to creating pixel-perfect designs ensure that every website I build 
                is visually stunning and seamlessly functional across various devices and browsers...</p>
                <button onClick={toggleDescription} className="btn btn-primary">Read More</button>

                </>
              )
            }
            <a href="#contact" className="about-cta">Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
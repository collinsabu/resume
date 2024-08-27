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
               <p> I recently expanded my skill set to include UI design using Figma, which complements my development work and ensures that the user interfaces I create 
                are not only user-friendly but also visually appealing. I've built several projects showcasing my expertise, 
                which you can explore on my portfolio. </p>
                <p>I'm now looking for opportunities to join a forward-thinking team where I can contribute my skills as a React/Next.js developer, collaborate with other professionals, and 
                  continue to grow in my career. If you're looking for someone who is dedicated, detail-oriented, and constantly striving to learn and improve, let's connect!</p>
                <button onClick={toggleDescription} className="btn btn-primary">Read Less</button>
                </>  
              ) : (
                <>
                <p> Hello! I'm Collins Abu, a passionate and skilled Front-End Developer with a strong focus on React and Next.js. Over the years, I have honed my abilities in building 
                  dynamic and responsive web applications that deliver great user experiences. My journey into web development has been driven by a deep curiosity 
                  for technology and a desire to create digital solutions that are both functional and aesthetically pleasing. <br/><br />


                  With a background in graphic design, I bring a unique blend of creativity and technical expertise to every project. My design skills allow me to craft visually compelling interfaces, 
                  while my knowledge of modern web technologies enables me to implement those designs effectively. I'm proficient in JavaScript, React, Next.js, and have hands-on experience with Node.js
                   and Express, which allows me to work across the full stack when needed...</p>
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
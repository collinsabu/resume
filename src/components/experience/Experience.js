import "./experience.css"
import { HiBadgeCheck } from "react-icons/hi"

const Experience = () => {
  return (
    <section id="experience">
    <h5>See My Skills</h5>
    <h2>My Experience</h2>


    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Developer</h3>
        <div className="experience_content">
          <article className="experience_details">
          <HiBadgeCheck className="experience_details-icons"/>
            <div>
            <h4>HTML</h4>
             <small  className="text-light">Experienced</small>
            </div>
              

          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/> 
             <div>
             <h4>CSS</h4>
             <small  className="text-light">Intermediate</small>
            </div> 
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>Javascript</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
             <div>
             <h4>Bootstrap</h4>
             <small  className="text-light">Intermediated</small>
             </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>React</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Next</h4>
             <small  className="text-light">Basic</small>
           </div>
          </article>
        </div>
      </div>

      {/* ===== END OF FRONT END  ==== */}

      <div className="experience_graphics">
        <h3>Graphics & UI Design</h3>
        <div className="experience_content">
          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Photoshop</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Adobe Illustrator</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Adobe InDesign</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>CorelDRAW</h4>
             <small  className="text-light">Intermediate</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>Canva</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
            <h4>Figma</h4>
            <small  className="text-light">Experienced</small>
           </div>
          </article>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Experience
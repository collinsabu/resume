import "./portfolio.css"
import IMG1 from "../../images/img1.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>


    <div className="container portfolio_container">


      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/QMm97c84/Weather-app.jpg" alt="graphics of a weather app design with html,css and javascript displaying current temperature, weather conditions, and forecast for a city." />
        </div>
        <h3> Weather App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/Weather-App" className="btn" target="_blank">Github</a>
        <a href="https://complet-weather-app.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
        
      </article>

      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/BQWmM1fZ/Responsive-Website.jpg" alt="Graphic showcasing a responsive website design developed using HTML, CSS, JavaScript, and React for optimal user experience across devices"/>
        </div>
        <h3> Responsive Website Design </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/Ziprus-Chemicals" className="btn" target="_blank">Github</a>
        <a href="https://ziprus-chemicals.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/W1Smzs9G/church.jpg"  alt="Graphic showcasing a fitness tracker app developed using HTML, CSS, JavaScript, and React, displaying exercise stats, activity tracking, and health metrics for comprehensive fitness progress tracking" />
        </div>
        <h3>Church Attendance App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/churcuAttendance" className="btn" target="_blank">Github</a>
        <a href="https://churcu-attendance.vercel.app/login" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/VNCYgD6K/music-app.jpg" alt="Graphic showcasing a music app developed using HTML, CSS, JavaScript, and React, offering a seamless user experience, personalized playlists, music recommendations, and comprehensive library management for an immersive music listening experience" />
        </div>
        <h3>Music App </h3>
        <div className="portfolio_item-cta">
        <a href="#" className="btn" target="_blank">Github</a>
        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/PrrHFVwK/Finance-App.jpg" alt="Graphic showcasing a finance app developed using HTML, CSS, JavaScript, and React, providing intuitive financial management tools, budget tracking, expense visualization, and secure transaction management for efficient personal finance control." />
        </div>
        <h3>Shift Manager App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/shiftManager" className="btn" target="_blank">Github</a>
        <a href="https://shift-manager-eight.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/j2XKLycc/resumesite.jpg" alt="Graphics design/ UI design image" />
        </div>
        <h3> Portfolio Website </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/portfolio" target="_blank" className="btn" target="_blank">Github</a>
        <a href="https://resume-phi-lemon.vercel.app/" target="_blank" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
        
      </article>
    </div>
  </section>
  )
}

export default Portfolio
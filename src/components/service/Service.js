import "./service.css"
import { BiCheck } from "react-icons/bi"

const Service = () => {
  return (
    <section id="service">
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
            <article className="service">
              <div className="service_head">
                <h3>UI Designs</h3>
              </div>

              <ul className="service_list">
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Creating visually appealing and intuitive interfaces.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Developing wireframes and interactive prototypes.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Responsive Design.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Creating custom icons.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Developing a comprehensive design system </p>
                </li>

              </ul>
            </article>

            {/* ========= FIRST ARTICLE ENDS HERE(UI DESIGNS) ======== */}

            <article className="service">
              <div className="service_head">
                <h3>Graphics Design</h3>
              </div>

              <ul className="service_list">
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Motion Graphics Designs.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p> Creating graphical assets for user interfaces</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Designing web-specific graphics, such as website banners</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Designing various print materials such as brochures, flyers, etc</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Creating unique and memorable logos that represent a brand's identity and values. .</p>
                </li>

              </ul>
            </article>

              {/* ========= SECOND ARTICLE ENDS HERE (GRAPHICS DESIGN]) ======== */}

            <article className="service">
              <div className="service_head">
                <h3>Web Developement</h3>
              </div>

              <ul className="service_list">
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Performance Optimization: Optimizing website performance by improving loading times </p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Lorem ipsum dolor sit.</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Frontend Framework Integration: Integrating frontend frameworks like React</p>
                </li>
                <li>
                  <BiCheck className="service_icon"/>
                  <p>Responsive Web Design </p>
                </li>


              </ul>
            </article>
          {/* =========THIRD ARTICLE ENDS HERE (GRAPHICS DESIGNS) ======== */}
      </div>
    </section>
  )
}

export default Service
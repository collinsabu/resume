import "./contact.css"
import {MdOutlineEmail} from "react-icons/md";
import {AiOutlineInstagram} from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yci1xhp', 'template_6otgkyg', form.current, 'e1SwNceJ3bUjokMnk')
 
      .then((result) => {
        e.target.reset()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>graphics.collinsabu@gmail.com</h5>
            <a href="mailto:graphics.collinsabu@gmail.com" target="_blank">Send Message</a>
          </article>

          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon"/>
            <h4>Instagram</h4>
            <h5>See ProJects</h5>
            <a href="https://www.instagram.com/dev_collinsabu/" target="_blank">Send Message</a>
          </article>

          <article className="contact_option">
            <MdWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>Send A Message</h5>
            <a href="https://api.whatsapp.com/send?phone=+447862772070" target="_blank">Send Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required/>
          <input type="email" name="email"  placeholder="Enter Email" required/>
          <textarea name="message" rows="7" placeholder="Your message..." required></textarea>
          <button type="submit" className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
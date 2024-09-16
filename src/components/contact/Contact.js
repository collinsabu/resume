import React, { useState } from 'react';
import axios from 'axios';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/send-email', formData);

      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email', error);
      alert('There was an error sending your message. Please try again.');
    }
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
            <h5>See Projects</h5>
            <a href="https://www.instagram.com/dev_collinsabu/" target="_blank">Send Message</a>
          </article>

          <article className="contact_option">
            <MdWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>Send A Message</h5>
            <a href="https://api.whatsapp.com/send?phone=+447862772070" target="_blank">Send Message</a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required/>
          <textarea name="message" rows="7" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";

import {TfiLocationPin} from 'react-icons/tfi'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'

import "./ContactMe.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log(formData);
    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div id="contact-container">
      <div id="Contacts-form">
        <div className="input-container">
          <h1 id="form-title">
            Contact Form
          </h1>
        </div>
        <form onSubmit={handleSubmit} id="form">
          <div className="input-container">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              id="text-area"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="form-input" type="submit" id="submit">
            Send Message
          </button>
        </form>
      </div>
      <div id="contact-info">
        <h1 id="h1-c">Contact details</h1>
        <p><TfiLocationPin  /> Takoradi, Ghana</p>
        <p><AiOutlineMail /> nwodobehm@gmail.com</p>
        <p><FiPhone /> +233 55 270 8723</p>
      </div>
      <div id="other-info">

      </div>
    </div>
  );
}

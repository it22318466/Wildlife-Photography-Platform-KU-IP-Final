import React, { useState } from "react";
import "../Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General question",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to backend/send email here
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "General question",
      message: "",
    });
  };

  return (
    <section className="containerr">
      <h1 className="h1">Get in Touch</h1>
      <p className="sub-title">
        Questions about wildlife stays, photography trips, or bookings? Send us a
        note and we’ll reply soon.
      </p>

      <div id="contact-container">
        <div className="contact-info">
          <h4 className="h4">WildGuide Support</h4>
          <p className="p">
            We’re here to help with itineraries, gear recommendations, and park
            insights. Reach out anytime.
          </p>

          <div className="icon-text">
            <span className="span">Email</span>
            <span className="span value">support@wildguide.com</span>
          </div>
          <div className="icon-text">
            <span className="span">Phone</span>
            <span className="span value">+1 (555) 234-7788</span>
          </div>
          <div className="icon-text">
            <span className="span">Hours</span>
            <span className="span value">Mon–Sat, 9am–6pm</span>
          </div>

          <div className="social-media">
            <a className="icon-circle" href="https://facebook.com" aria-label="Facebook">
              f
            </a>
            <a className="icon-circle" href="https://instagram.com" aria-label="Instagram">
              ig
            </a>
            <a className="icon-circle" href="https://x.com" aria-label="X">
              x
            </a>
            <a className="icon-circle" href="https://youtube.com" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="col">
            <div className="form-group">
              <label className="label" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="input"
                placeholder="+1 555 000 1111"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="topic">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="input select"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="General question">General question</option>
                <option value="Booking help">Booking help</option>
                <option value="Photography guidance">Photography guidance</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="label label-message" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea input"
              placeholder="Tell us what you need help with..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="button-send">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import "../styles/Contact.css";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Dear ${formData.name}, Your message has been sent successfully.`);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="contact-me-container section-page box4">
      <div className="page_header">
        <span>Contact Me</span>
      </div>
      <div className="question_container">
        <span className="question-heading">Do you have any question ?</span>
        <span className="question-heading-small">I'm at your service</span>
      </div>
      <div className="contact-icon-container">
        <div className="icon-section">
          <i className="fa-solid fa-phone icon"></i>
          <span className="header-icon">Call Me</span>
          <span className="lower-text">+91 8090674352</span>
        </div>
        <div className="icon-section">
          <i className="fa-solid fa-location-dot icon"></i>
          <span className="header-icon">Location</span>
          <span className="lower-text">Nilmatha, Lucknow</span>
        </div>
        <div className="icon-section">
          <i className="fa-solid fa-envelope icon"></i>
          <span className="header-icon">Email</span>
          <span className="lower-text">anuragkumarsingh154@gmail.com</span>
        </div>
      </div>
      <div className="link-icon-container">
        <a
          href="https://www.linkedin.com/in/anurag-singh-lucknow/"
          target="_blank"
          rel="noopener"
        >
          <i className="fa-brands fa-linkedin icon"></i>
        </a>

        <a
          href="https://github.com/Anurag80909086"
          target="_blank"
          rel="noopener"
        >
          <i className="fa-brands fa-github icon"></i>
        </a>
      </div>
      <div className="response-container">
        <span>SEND ME AN EMAIL</span>
      </div>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="row-input">
          <div className="form_parent">
            <input
              type="text"
              aria-label="name"
              id="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form_parent">
            <input
              type="text"
              aria-label="name"
              id="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form_parent">
          <input
            type="text"
            aria-label="name"
            id="subject"
            required
            value={formData.subject}
            placeholder="Subject"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="form_parent">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Type Your Message Here"
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button className="btn" id="submt" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

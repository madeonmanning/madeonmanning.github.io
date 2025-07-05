import React, { useState } from 'react';
import './PageDefaults.css'; // Reusing common page styles
import './ContactUs.css'; // Specific styles for the form

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    // For now, let's just log it to the console
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // You might want to clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="page-section contact-page">
      <h1 className="page-title">Get in Touch</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our products, want to
        inquire about custom orders, or need more information about rentals, please use the
        form below to reach out.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <p className="email-direct">
        You can also email us directly at: <a href="mailto:madeonmanning@gmail.com">madeonmanning@gmail.com</a>
      </p>
    </div>
  );
}

export default ContactUs;
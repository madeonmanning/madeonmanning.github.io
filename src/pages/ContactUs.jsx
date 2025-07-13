import React, { useState } from 'react';
import './PageDefaults.css'; // Reusing common page styles
import './ContactUs.css'; // Specific styles for the form

function ContactUs() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry', // Added topic with a default value
    subject: '',
    message: '',
  });

  // State to manage submission feedback (success/error messages)
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // State to manage loading indicator during submission
  const [isLoading, setIsLoading] = useState(false);

  // Handles changes to form input fields and updates the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    setIsLoading(true); // Set loading state to true
    setSubmissionStatus(null); // Clear previous submission status

    // Concatenate topic and subject for the custom _subject field
    const fullSubject = `${formData.topic}: ${formData.subject}`;

    // Create a FormData object to send to FormSubmit.co
    // This is necessary because FormSubmit.co expects traditional form data
    const dataToSend = new FormData();
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('topic', formData.topic);
    dataToSend.append('subject', formData.subject);
    dataToSend.append('message', formData.message);
    dataToSend.append('_subject', fullSubject); // Dynamic _subject
    dataToSend.append('_captcha', 'false'); // Disable captcha for FormSubmit.co

    try {
      // Send the form data to FormSubmit.co using fetch
      const response = await fetch("https://formsubmit.co/443b1077a09ebce89f8950b9fb77b52d", {
        method: "POST",
        body: dataToSend,
      });

      // FormSubmit.co typically redirects or returns a 200 OK.
      // We check if the response was successful (status 2xx)
      if (response.ok) {
        setSubmissionStatus({ type: 'success', message: 'Thank you for your message! We will respond to you soon.' });
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          topic: 'General Inquiry', // Reset topic to default
          subject: '',
          message: '',
        });
      } else {
        // Handle cases where FormSubmit.co might return an error status
        setSubmissionStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      // Catch network errors or other issues during the fetch request
      console.error('Submission error:', error);
      setSubmissionStatus({ type: 'error', message: 'A network error occurred. Please check your connection and try again.' });
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="page-section contact-page">
      <h1 className="page-title">Get in Touch</h1>
      <p className='intro-text contact-intro'>
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
          <label htmlFor="topic">Topic:</label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Custom Baked Goods">Custom Baked Goods</option>
            <option value="Rentals">Rentals</option>
            <option value="Other">Other</option>
          </select>
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

        <button
          type="submit"
          className="submit-button"
          disabled={isLoading} // Disable button while submitting
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Display submission status messages */}
        {submissionStatus && (
          <p className="contact-submission">
            {submissionStatus.message}
          </p>
        )}
      </form>

      <p className="email-direct">
        You can also email us directly at: <a href="mailto:madeonmanning@gmail.com">madeonmanning@gmail.com</a>
      </p>
    </div>
  );
}

export default ContactUs;

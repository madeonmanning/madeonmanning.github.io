"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../globals.css';
import './About.css';

function About() {
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    setIsLoading(true);
    setSubmissionStatus(null); // Clear previous status

    const dataToSend = new FormData();
    dataToSend.append('email', email);
    dataToSend.append('_subject', 'New Newsletter Subscription'); // Custom subject for FormSubmit.co
    dataToSend.append('_captcha', 'false'); // Disable captcha

    try {
      const response = await fetch("https://formsubmit.co/443b1077a09ebce89f8950b9fb77b52d", { // Replace with your FormSubmit.co endpoint
        method: "POST",
        body: dataToSend,
      });

      if (response.ok) {
        setSubmissionStatus({ type: 'success', message: 'Thank you for subscribing! You will receive a confirmation email within 24 hours.' });
        setEmail(''); // Clear email field
      } else {
        setSubmissionStatus({ type: 'error', message: 'There was an error with your subscription. Please try again.' });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmissionStatus({ type: 'error', message: 'A network error occurred. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-section about-page">
      <h1 className="page-title">About Us</h1>
      <div className="about-content">
        <div>
          <img src="/about-us.jpg" alt="About Made on Manning" className="hero-image" />
        </div>
        
        <div className="about-text">
          <p>
            Building this farmcart was a launching point for something I&apos;m only just realizing is so much bigger. 
            One of my finer qualities - the one that drives my husband nuts - is my never-ending ability to 
            <b> start</b> new projects. I&apos;m an ace at picking up a new hobby, launching into a whole craft, and having something 
            baking in the kitchen, all at the same time. The catch? I often don&apos;t circle back to finishing. Laundry 
            needs to be done, the outdoors beckons, and suddenly that craft is a distant memory. But that&apos;s what 
            makes my husband and me such a great pair. I get to dream up a million new ideas, and with him by my 
            side, we&apos;re bound to finish every single one.
          </p>
          <p>
            Another thing about me is my do-it-all tendency. This little business has been a gift because I&apos;ve never 
            felt the need to hone in on a &quot;niche.&quot; I&apos;ve always been someone who struggles to &quot;stay in her lane.&quot; 
            Gardening? Yes. Baking? Forever. Sourdough? Check. Want to try woodworking? You bet! Maybe a pottery wheel? 
            Okay! Made on Manning is the outpouring of <b>all</b> the things I love to do. And as you&apos;ve probably gathered, 
            there are a lot of things I love to do.
          </p>
          <p>
            The biggest blessing of all is doing this alongside my family. My husband has supported and encouraged me 
            since before day one. He&apos;s never once dissuaded or discouraged me. He stays up late to balance the books. 
            He builds me ingredient cost calculators and email mail merge scripts. I honestly couldn&apos;t do this without 
            him. <i>(Or maybe I could, but it definitely wouldn&apos;t be fully compliant!)</i> He&apos;s my biggest cheerleader and fan, and he 
            even washes my dishes and plant trays for me <i>(see aforementioned starting of many projects but severe lack 
            of follow-through)</i>.
          </p>
          <p>
            And then there are my four kids. We homeschool, so they&apos;re with me all day, every day, including the time 
            I spend running this &quot;business.&quot; It&apos;s been so fun that many of the jobs and activities required are things 
            they can help with. Even my two-year-old started by peeling stickers for Mommy to put on bread bags. We plant 
            together, cut flowers together, bake bread together, and eat cookies together. They are my little helpers, 
            from the garden to the kitchen to running out to stock the farmcart all summer. I truly couldn&apos;t do it without 
            them!
          </p>
          <p>
            When we first came to Manning, I was making memories building this home, turning it into all we dreamed of. 
            Now, I&apos;m in a whole new era of making memories on Manning. Starting a business I never thought I would, 
            launching this little farmcart into the world, and watching it take off. Of all the things I&apos;ve made, baked, 
            and grown here on Manning, the memories made here are my favorite of all.
          </p>
          <p>
            With love, <b>Sarah</b>
          </p>
        </div>

        <div className="page-category">
          <h2 className="category-heading">Stay in Touch</h2>
          <div className="category-options-container"> {/* New container for the two options */}

            {/* Option 1: Contact Us */}
            <div className="option-block contact-option">
              <h3>Have a specific question?</h3>
              <p>Fill out our contact form and we&apos;ll get back to you as soon as possible.</p>
              <Link href="/contact" className="cta-button">Contact Us</Link>
            </div>

            {/* Option 2: Subscribe to Newsletter */}
            <div className="option-block subscribe-option" id="subscribe">
              <h3>Join our subscription list!</h3>
              <p>Stay updated with our latest news and offerings.</p>
              <form className="subscribe-form" onSubmit={handleSubscribeSubmit}> {/* Renamed class for clarity */}
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button
                  type="submit"
                  className="cta-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
                {submissionStatus && (
                  <p className={`subscribe-status ${submissionStatus.type}`}>
                    {submissionStatus.message}
                  </p>
                )}
              </form>
            </div>

          </div> {/* End of category-options-container */}
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './PageDefaults.css'; // For general page styling like titles and sections
import './Workshops.css';    // For specific workshop page styling

function Workshops() {
  return (
    <div className="page-section workshops-page">
      <h1 className="page-title">Workshops & Classes</h1>
      <p className="intro-text">
        Unlock your creative potential with our hands-on workshops! At Made on Manning, we believe in the joy of learning and creating. Join us for an immersive experience in baking, floral design, or even a taste of woodworking. Our small-group classes are designed to be fun, informative, and inspiring for all skill levels.
      </p>

      <section className="workshop-highlight">
        <h2 className="section-heading">Featured Workshop: The Art of Sourdough</h2>
        <div className="workshop-content">
          <img src="/sourdough-workshop.jpg" alt="Sourdough Workshop" className="workshop-image" />
          <div className="workshop-details">
            <h3>Master the Magic of Sourdough Baking</h3>
            <p>
              Dive deep into the world of sourdough with our comprehensive hands-on workshop. From feeding your starter to shaping your perfect loaf, we'll guide you through every step of the process. Learn the science behind fermentation, develop your shaping techniques, and discover the secrets to achieving that coveted crust and airy crumb.
            </p>
            <ul>
              <li><strong>Duration:</strong> 4 hours</li>
              <li><strong>Level:</strong> Beginner to Intermediate</li>
              <li><strong>What you'll learn:</strong></li>
              <ul>
                <li>Starter care and maintenance</li>
                <li>Mixing and bulk fermentation techniques</li>
                <li>Shaping round and oval loaves</li>
                <li>Baking in a Dutch oven</li>
                <li>Troubleshooting common sourdough issues</li>
              </ul>
              <li><strong>What you'll take home:</strong> Your own active sourdough starter, a freshly baked loaf, and newfound confidence!</li>
            </ul>
            <a href="/contact" className="workshop-cta-button">Inquire About Sourdough Workshops</a>
          </div>
        </div>
      </section>

      <section className="upcoming-workshops">
        <h2 className="section-heading">Other Creative Workshops</h2>
        <p className="sub-intro">
          Beyond sourdough, we're passionate about sharing our diverse range of skills. Keep an eye on this space for future class announcements!
        </p>

        <div className="workshop-grid">
          <div className="workshop-card">
            <h3>Seasonal Floral Design</h3>
            <img src="/floral-workshop.jpg" alt="Floral Design Workshop" className="card-image" />
            <p>Learn to create stunning arrangements using fresh, seasonal blooms from our own farm. Techniques for bouquets, centerpieces, and more.</p>
            <a href="/contact" className="card-cta">Learn More</a>
          </div>

          <div className="workshop-card">
            <h3>Introduction to Woodworking</h3>
            <img src="/woodworking-workshop.jpg" alt="Woodworking Workshop" className="card-image" />
            <p>Discover the basics of woodworking, from safe tool handling to simple project construction. Create a small, functional piece for your home.</p>
            <a href="/contact" className="card-cta">Learn More</a>
          </div>

          <div className="workshop-card">
            <h3>Artisan Cookie Decorating</h3>
            <img src="/cookie-workshop.jpg" alt="Cookie Decorating Workshop" className="card-image" />
            <p>Unleash your inner artist with our cookie decorating class. Learn piping, flooding, and intricate design techniques for beautiful treats.</p>
            <a href="/contact" className="card-cta">Learn More</a>
          </div>
        </div>

        <p className="inquire-note">
          Interested in a custom workshop for your group or a private lesson? <Link to="/contact">Contact us</Link> to discuss possibilities!
        </p>
      </section>
    </div>
  );
}

export default Workshops;
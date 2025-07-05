import React from 'react';
import './Home.css'; // Optional: for specific Home page styles

function Home() {
  return (
    <div className="page-section home-page">
      <h1 className="page-title">Welcome to Made on Manning</h1>
      <p>
        Your destination for handcrafted delights, fresh blooms, and unique creations.
        We're a home-based business offering a delightful blend of artisanal baked goods,
        beautiful seasonal flowers, and bespoke creative projects like woodworking.
        Explore our site to learn more about our weekly farm stand, rental options, and
        how we can bring a touch of handmade charm to your life.
      </p>
      {/* Add more content, images, call-to-actions here */}
      <img src="/manning-hero.jpg" alt="Made on Manning Hero" className="hero-image" />
      <div className="section-grid">
        <div className="grid-item">
          <h2>Our Bakery</h2>
          <p>Sourdough, pastries, custom cakes, and more. Baked with love and the finest ingredients.</p>
        </div>
        <div className="grid-item">
          <h2>The Flower Shop</h2>
          <p>Fresh, seasonal arrangements for all occasions, grown and curated with care.</p>
        </div>
        <div className="grid-item">
          <h2>Creative Projects</h2>
          <p>From custom woodworking pieces to unique artisanal crafts, discover something special.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
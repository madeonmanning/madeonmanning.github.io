import React from 'react';
import './PageDefaults.css'; // Reusing common page styles

function Farmstand() {
  return (
    <div className="page-section farmstand-page">
      <h1 className="page-title">Our Weekly Farmstand</h1>
      <p>
        Join us every Friday from [Start Time] to [End Time] at our home on Manning Ave S
        for a delightful selection of fresh baked goods, seasonal flowers, and unique artisan crafts.
        Our farmstand is a celebration of local ingredients and handmade quality.
      </p>
      <p>
        We'll have an ever-changing array of sourdough breads, pastries, cookies, and more from the bakery.
        Our flower offerings will feature the freshest blooms from our garden, arranged beautifully.
        You might also find new woodworking pieces, handmade cards, or other creative projects available.
      </p>
      <h3>What to Expect:</h3>
      <ul>
        <li>Freshly Baked Breads & Pastries</li>
        <li>Seasonal Flower Bouquets</li>
        <li>Handcrafted Goods (woodwork, stationery, etc.)</li>
        <li>Friendly Faces & Good Vibes!</li>
      </ul>
      <p>Follow us on Instagram for weekly updates on what's available!</p>
    </div>
  );
}

export default Farmstand;
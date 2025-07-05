import React from 'react';
import './PageDefaults.css'; // Reusing common page styles

function Rentals() {
  return (
    <div className="page-section rentals-page">
      <h1 className="page-title">Rentals from Made on Manning</h1>
      <p>
        Looking for unique pieces to enhance your event or space? Made on Manning offers a curated
        selection of items available for rent, perfect for weddings, photoshoots, parties, or home staging.
      </p>
      <h3>Our Current Rental Inventory Includes:</h3>
      <ul>
        <li>
          <h4>Arches & Backdrops</h4>
          <p>Beautifully crafted wooden arches and unique backdrops for ceremonies or photo booths.</p>
        </li>
        <li>
          <h4>Vases & Vessels</h4>
          <p>A collection of eclectic and elegant vases, perfect for floral arrangements.</p>
        </li>
        <li>
          <h4>Tableware & Props</h4>
          <p>Vintage-inspired plates, unique serving dishes, and decorative props to set the scene.</p>
        </li>
        <li>
          <h4>Custom Woodwork Pieces</h4>
          <p>Specific wooden signs, display stands, or other items custom-made for your event.</p>
        </li>
      </ul>
      <p>
        Please contact us for availability, pricing, and to discuss your specific rental needs.
        We're happy to help you find the perfect pieces!
      </p>
    </div>
  );
}

export default Rentals;
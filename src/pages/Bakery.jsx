import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './PageDefaults.css'; // For general page styling like titles and sections
import './Bakery.css';    // For specific bakery page styling

function Bakery() {
  const baseURL = import.meta.env.BASE_URL; // For images in the public folder

  return (
    <div className="page-section bakery-page">
      <h1 className="page-title">Custom Bakery Creations</h1>
      <p className="intro-text">
        At Made on Manning, we specialize in crafting delicious and beautiful custom baked goods for all your special occasions. From elegant wedding cakes to delightful celebration cookies, every item is made with the finest ingredients and a touch of artisanal care. Explore our offerings below and let us create something truly unique for you!
      </p>

      <section className="bakery-category">
        <h2 className="section-heading">Custom Cakes</h2>
        <div className="category-content">
          <img src={`${baseURL}bakery-cakes.jpg`} alt="Custom Cakes" className="category-image" />
          <div className="category-details">
            <h3>Celebration Cakes for Every Occasion</h3>
            <p>
              Whether it's a birthday, anniversary, baby shower, or just a Tuesday, our custom cakes are designed to impress both visually and tastefully. We offer a range of flavors, fillings, and frostings, and work closely with you to bring your vision to life, from classic elegance to whimsical designs.
            </p>
            <ul>
              <li>Weddings & Engagements</li>
              <li>Birthdays & Anniversaries</li>
              <li>Baby Showers & Gender Reveals</li>
              <li>Special Events & Corporate Gatherings</li>
            </ul>
            <p>
              **Popular Flavors:** Vanilla Bean, Rich Chocolate, Lemon Raspberry, Carrot Spice, Red Velvet.
            </p>
            <p>
              **Pricing:** Varies based on size, complexity, and ingredients.
            </p>
            <Link to="/contact" className="bakery-cta-button">Inquire About a Custom Cake</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category inverted-layout"> {/* Added inverted-layout class */}
        <h2 className="section-heading">Artisan Cookies & Decorated Sets</h2>
        <div className="category-content">
          <img src={`${baseURL}bakery-cookies.jpg`} alt="Decorated Cookies" className="category-image" />
          <div className="category-details">
            <h3>Sweet, Hand-Decorated Works of Art</h3>
            <p>
              Our custom cookies are perfect for party favors, corporate gifts, or just a delightful treat. We specialize in intricate royal icing designs that can be personalized to match your event's theme, colors, or brand.
            </p>
            <ul>
              <li>Custom Sugar Cookies (various shapes & designs)</li>
              <li>Gourmet Drop Cookies (chocolate chip, oatmeal raisin, snickerdoodle)</li>
              <li>Cookie Platters & Assortments</li>
            </ul>
            <p>
              **Pricing:** Varies by design complexity and quantity. Minimum order applies for custom decorated cookies.
            </p>
            <Link to="/contact" className="bakery-cta-button">Order Custom Cookies</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category">
        <h2 className="section-heading">Pastries & Desserts</h2>
        <div className="category-content">
          <img src={`${baseURL}bakery-pastries.jpg`} alt="Pastries and Desserts" className="category-image" />
          <div className="category-details">
            <h3>Elevate Your Dessert Spread</h3>
            <p>
              Beyond cakes and cookies, Made on Manning offers a delectable selection of pastries and smaller desserts, perfect for dessert tables, brunches, or just a delightful indulgence.
            </p>
            <ul>
              <li>Seasonal Fruit Tarts</li>
              <li>Cupcakes (custom flavors & decorations)</li>
              <li>Mini Cheesecakes</li>
              <li>Brownie & Bar platters</li>
              <li>Macarons (seasonal flavors)</li>
            </ul>
            <p>
              Please inquire for our full menu of available items and custom order options.
            </p>
            <Link to="/contact" className="bakery-cta-button">Inquire About Pastry Orders</Link>
          </div>
        </div>
      </section>

      <div className="inquiry-call-to-action">
        <p>Ready to make your sweet dreams a reality? We'd love to discuss your custom bakery order!</p>
        <Link to="/contact" className="main-inquiry-button">Start Your Custom Order Inquiry</Link>
      </div>

    </div>
  );
}

export default Bakery;
import React from 'react';
import Slider from 'react-slick'; // Import Slider component
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './PageDefaults.css'; // For general page styling like titles and sections
import './Bakery.css';    // For specific bakery page styling

function Bakery() {
// Define settings for your carousel
  const settings = {
    dots: true,          // Show dot indicators at the bottom
    infinite: true,      // Loop the carousel
    speed: 500,          // Transition speed in milliseconds
    slidesToShow: 1,     // Number of slides to show at once
    slidesToScroll: 1,   // Number of slides to scroll when navigating
    autoplay: true,      // Enable automatic sliding
    autoplaySpeed: 5000, // Time between slides in milliseconds (3 seconds)
    arrows: false,        // Show navigation arrows (next/prev)
    pauseOnHover: true,
    // You can add more settings as needed: https://react-slick.neostack.com/docs/example/
  };

  // Define your images
  const sugar_cookie_images = [
    { id: 1, src: '/sugar-cookie-1.jpg', alt: 'Flower Sugar Cookies' },
    { id: 2, src: '/sugar-cookie-2.jpg', alt: 'Oh Baby Sugar Cookies' },
    { id: 3, src: '/sugar-cookie-3.jpg', alt: 'Taco Sugar Cookies' },
    { id: 4, src: '/sugar-cookie-4.jpg', alt: 'Heart & Baby Sugar Cookies' },
    { id: 5, src: '/sugar-cookie-5.jpg', alt: 'Baby Sugar Cookies' },
    { id: 6, src: '/sugar-cookie-6.jpg', alt: 'Home Sugar Cookies' },
    { id: 7, src: '/sugar-cookie-7.jpg', alt: 'Vegetable Sugar Cookies' },
  ];


  return (
    <div className="page-section bakery-page">
      <h1 className="page-title">Custom Bakery Creations</h1>
      <p className="intro-text">
        For those moments that call for something truly special, we're thrilled to offer custom baked goods designed exclusively for your celebrations - from bridal to baby showers, graduations, or your next special event. 
      </p>

      <section className="bakery-category">
        <h2 className="section-heading">Sugar Cookies</h2>
        <div className="category-content">
          <div className="bakery-carousel-container">
            <Slider {...settings}>
              {sugar_cookie_images.map(image => (
                <div key={image.id}>
                  <img src={image.src} alt={image.alt} className="bakery-carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="category-details">
            <p>
              We specialize in intricate royal icing designs that can be personalized to match your event's theme, colors, or brand - on top of our family's favorite vanilla almond sugar cookie.
            </p>
            <p>
              Perfect for:
            </p>
            <ul>
              <li>Bridal Showers</li>
              <li>Graduation Parties</li>
              <li>Baby Showers & Gender Reveals</li>
              <li>Special Events</li>
            </ul>
            <p>
              <b>Pricing:</b> Starts at $3 per cookie. Minimum order of 12 cookies per design.
              Cookies are approximately 3 inches in diameter with a maximum of 3 colors per cookie.
              Larger cookies or more colors available, but may result in price increase.
            </p>
            <Link to="/contact" className="bakery-cta-button">Inquire About Custom Cookies</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category inverted-layout"> {/* Added inverted-layout class */}
        <h2 className="section-heading">Cupcakes</h2>
        <div className="category-content">
          <img src="/bakery-cupcakes.jpg" alt="Decorated Cookies" className="category-image" />
          <div className="category-details">
            <p>
              Order unique, beautiful, custom cupcakes for your next event baked with the best available ingredients.
            </p>
            <p>
              Sample flavors include: <i>(others available upon request)</i>
            </p>
            <ul>
              <li>Chocolate</li>
              <li>Vanilla</li>
              <li>Carrot Cake</li>
              <li>Lemon Raspberry</li>
            </ul>
            <p>
              <b>Pricing:</b> Starts at $3 per cupcake. Minimum of 12 cupcakes per flavor.
            </p>
            <Link to="/contact" className="bakery-cta-button">Inquire About Custom Cupcakes</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category">
        <h2 className="section-heading">Bulk Ordering</h2>
        <div className="category-content">
          <img src="/bakery-cakes.jpg" alt="Pastries and Desserts" className="category-image" />
          <div className="category-details">
            <p>
              Love our weekly farmstand offerings but looking for a larger quantity for a special event? We have bulk ordering available!
            </p>
            <p>
              Example bulk orders:
            </p>
            <ul>
              <li>5+ loaves of sourdough bread</li>
              <li>Sourdough bread bowls</li>
              <li>Scones by the dozen</li>
            </ul>
            <Link to="/contact" className="bakery-cta-button">Inquire About Bulk Orders</Link>
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
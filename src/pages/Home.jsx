import React from 'react';
import Slider from 'react-slick'; // Import Slider component
import './Home.css'; // Your existing Home page styles, now with slick imports

function Home() {
  // Define settings for your carousel
  const settings = {
    dots: true,          // Show dot indicators at the bottom
    infinite: true,      // Loop the carousel
    speed: 500,          // Transition speed in milliseconds
    slidesToShow: 1,     // Number of slides to show at once
    slidesToScroll: 1,   // Number of slides to scroll when navigating
    autoplay: true,      // Enable automatic sliding
    autoplaySpeed: 3000, // Time between slides in milliseconds (3 seconds)
    arrows: true,        // Show navigation arrows (next/prev)
    pauseOnHover: true,
    // You can add more settings as needed: https://react-slick.neostack.com/docs/example/
  };

  // Define your images
  const images = [
    { id: 1, src: '/home-slider-1.jpg', alt: 'Farmstand' },
    { id: 2, src: '/home-slider-2.jpg', alt: 'Flowers' },
    { id: 3, src: '/home-slider-3.jpg', alt: 'Sourdough Bread' },
    { id: 4, src: '/home-slider-4.jpg', alt: 'Making Cinnamon Rolls' },
    { id: 5, src: '/home-slider-5.jpg', alt: 'Baking Cookies' },
    { id: 6, src: '/home-slider-6.jpg', alt: 'Frosted Cinnamon Rolls' },
    { id: 7, src: '/home-slider-7.jpg', alt: 'Jams' },
  ];

  return (
    <div className="page-section home-page">
      <h1 className="page-title">Welcome to Made on Manning</h1>
      <p>
        Your destination for handcrafted delights, fresh blooms, and unique creations.
        We're a home-based business offering a delightful blend of handcrafted baked goods,
        beautiful seasonal flowers, and other creative projects. Explore our site to learn 
        more about our weekly farm stand, rental options, and how we can bring a touch of 
        handmade charm to your life.
      </p>

      {/* Image Carousel */}
      <div className="carousel-container"> {/* Add a wrapper div for styling if needed */}
        <Slider {...settings}>
          {images.map(image => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="section-grid">
        <div className="grid-item">
          <h2>The Bakery</h2>
          <p>Sourdough, pastries, custom sugar cookies, and more. Baked with love and the finest ingredients.</p>
        </div>
        <div className="grid-item">
          <h2>The Garden</h2>
          <p>Fresh, seasonal arrangements grown and curated with care.</p>
        </div>
        <div className="grid-item">
          <h2>Other Projects</h2>
          <p>Woodworking, beekeeping, pottery, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
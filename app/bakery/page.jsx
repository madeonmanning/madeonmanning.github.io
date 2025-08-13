"use client"

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import '../globals.css';
import './Bakery.css';

function Bakery() {
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
    pauseOnHover: false,
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
    { id: 8, src: '/sugar-cookie-8.jpg', alt: 'Flower Pot Sugar Cookies' },
    { id: 9, src: '/sugar-cookie-9.jpg', alt: 'Flower Sugar Cookies' },
    { id: 10, src: '/sugar-cookie-10.jpg', alt: 'Flower Bouquet Sugar Cookies' },
  ];

  const cupcake_images = [
    { id: 1, src: '/cupcake-1.jpg', alt: 'Chocolate Heart Cupcakes' },
    { id: 2, src: '/cupcake-2.jpg', alt: 'Galaxy Sprinkle Chocolate Cupcakes' },
    { id: 3, src: '/cupcake-3.jpg', alt: 'Lemon Raspberry, Carrot Cake, and Chocolate Cupcakes' },
    { id: 4, src: '/cupcake-4.jpg', alt: 'Pie Decorated Cupcakes' },
    { id: 5, src: '/cupcake-5.jpg', alt: 'Dog Decorated Cupcakes' },
    { id: 6, src: '/cupcake-6.jpg', alt: 'Baby Bow Cupcakes' },
    { id: 7, src: '/cupcake-7.jpg', alt: 'Cupcakes matching a wedding cake' },
  ];

  const bulk_baking_images = [
    { id: 1, src: '/bulk-baking-1.jpg', alt: 'Bulk Sourdough Bread' },
    { id: 2, src: '/bulk-baking-2.jpg', alt: 'Organic Pasture-Raised Eggs' },
    { id: 3, src: '/bulk-baking-3.jpg', alt: 'Bulk Sourdough Bread' },
  ];


  return (
    <div className="page-section bakery-page">
      <h1 className="page-title">Custom Bakery Creations</h1>
      <p className="intro-text">
        For those moments that call for something truly special, we&apos;re thrilled to offer custom baked goods designed exclusively for your celebrations - from bridal to baby showers, graduations, or your next special event. 
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
              We specialize in intricate royal icing designs that can be personalized to match your event&apos;s theme, colors, or brand - on top of our family&apos;s favorite vanilla almond sugar cookie.
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
            <Link href="/contact" className="bakery-cta-button">Inquire About Custom Cookies</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category inverted-layout"> {/* Added inverted-layout class */}
        <h2 className="section-heading">Cupcakes</h2>
        <div className="category-content">
          <div className="bakery-carousel-container">
            <Slider {...settings}>
              {cupcake_images.map(image => (
                <div key={image.id}>
                  <img src={image.src} alt={image.alt} className="bakery-carousel-image" />
                </div>
              ))}
            </Slider>
          </div>

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
            <Link href="/contact" className="bakery-cta-button">Inquire About Custom Cupcakes</Link>
          </div>
        </div>
      </section>

      <section className="bakery-category">
        <h2 className="section-heading">Bulk Ordering</h2>
        <div className="category-content">
          <div className="bakery-carousel-container">
            <Slider {...settings}>
              {bulk_baking_images.map(image => (
                <div key={image.id}>
                  <img src={image.src} alt={image.alt} className="bakery-carousel-image" />
                </div>
              ))}
            </Slider>
          </div>

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
            <Link href="/contact" className="bakery-cta-button">Inquire About Bulk Orders</Link>
          </div>
        </div>
      </section>

      <div className="inquiry-call-to-action">
        <p>Ready to make your sweet dreams a reality? We&apos;d love to discuss your custom bakery order!</p>
        <Link href="/contact" className="main-inquiry-button">Start Your Custom Order Inquiry</Link>
      </div>

    </div>
  );
}

export default Bakery;

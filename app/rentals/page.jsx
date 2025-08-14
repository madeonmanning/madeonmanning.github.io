'use client'

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import '../globals.css';
import './Rentals.css';

function Rentals() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  const rentalItems = [
    {
      id: 1,
      name: 'Handcrafted Ash Wood Tables',
      story: 'Crafted from Ash trees reclaimed from our own property after being damaged by the Emerald Ash Borer, these tables carry a unique story of renewal. We milled the logs and built each one by hand, transforming a loss into something beautiful.',
      specs: [
        'Elegant wood grain eliminates need for linens',
        '7ft and 5ft lengths available',
        'Each table is 32 inches wide',
        '7ft tables seat 8-10 people per table',
      ],
      cost: '$40 per table (minimum of 4 tables)',
      images: [
        { id: 1, src: '/rental-table-1.jpg', alt: 'Handcrafted Ash Wood Table' },
        { id: 2, src: '/rental-table-2.jpg', alt: 'Handcrafted Ash Wood Table' },
        { id: 3, src: '/rental-table-3.jpg', alt: 'Handcrafted Ash Wood Table' },
        { id: 4, src: '/rental-table-4.jpg', alt: 'Handcrafted Ash Wood Table' },
      ]
    },
    {
      id: 2,
      name: 'White Folding Chairs',
      story: 'Classic folding chairs provide elegant seating for your event.',
      specs: [
        'Approx. 50 chairs available',
        'Variety of styles and woods',
        'Perfect for ceremonies or dining',
      ],
      cost: '$2 per chair (minimum of 10 chairs)',
      images: [
        { id: 1, src: '/rental-chair-1.jpg', alt: 'White folding chair' },
        { id: 2, src: '/rental-chair-1.jpg', alt: 'White folding chair' },
      ]
    }
  ];

  return (
    <div className="page-section rentals-page">
      <h1 className="page-title">Event Rentals</h1>
      <p className="intro-text">
        Add a touch of rustic charm and unique, handcrafted quality to your special event with our rental collection. Each piece has a story and is ready to be a part of yours. Pickup and delivery options available depending on the item.
      </p>

      {rentalItems.map((item, index) => (
        <section key={item.id} className={`rental-category ${index % 2 !== 0 ? 'inverted-layout' : ''}`}>
          <h2 className="section-heading">{item.name}</h2>
          <div className="category-content">
            <div className="rental-carousel-container">
              <Slider {...settings}>
                {item.images.map(image => (
                  <div key={image.id}>
                    <img src={image.src} alt={image.alt} className="rental-carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="category-details">
              <p>{item.story}</p>
              <p><b>Details:</b></p>
              <ul>
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <p>
                <b>Pricing:</b> {item.cost}
              </p>
              <Link href="/contact" className="rental-cta-button">Inquire About {item.name}</Link>
            </div>
          </div>
        </section>
      ))}

      <div className="inquiry-call-to-action">
        <p>Ready to bring these pieces into your celebration? We&apos;d love to discuss your rental needs!</p>
        <Link href="/contact" className="main-inquiry-button">Start Your Rental Inquiry</Link>
      </div>

    </div>
  );
}

export default Rentals;

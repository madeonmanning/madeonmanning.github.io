'use client'

import React from 'react';
import Link from 'next/link';
import '../globals.css';
import './Books.css';

function Books() {
  const bookItems = [
    {
      id: 1,
      name: 'Recipes Made on Manning',
      story: 'This book comes from some of the most beloved, stained, tattered notecards from Sarah\'s cupboard. The simple scrawled lists of ingredients were turned into actual recipes with written instructions and baking directions for you to follow.',
      specs: [
        'beautiful full page photos',
        'ten popular recipes from the farmstand (including cinnamon rolls and scones)',
        'notes from my heart surrounding serving others through simple acts of making space for them in your home and at your table',
      ],
      cost: '$25',
      image: '/book-recipes-made-on-manning.jpg',
      url: 'https://madeonmanning.square.site/product/book-recipes-made-on-manning/QPRTJHQI2J5A4KZ3QBSCZSMW'
    },
    {
      id: 2,
      name: 'Sourdough Made on Manning',
      story: 'Explore the world of sourdough with this new immersive booklet. Sarah took her sourdough workshop and turned it into written instructions with guided step-by-step photos to help you begin or further your sourdough journey.',
      specs: [
        'how to care for and maintain a sourdough starter',
        'original sourdough bread step-by-step recipe',
        'favorite sourdough recipes (including pizza crust, bagels, waffles and more)',
        'sourdough frequently asked questions',
        'notes from my heart about my desire to bring others together over something as simple as a shared meal'
      ],
      cost: '$25',
      image: '/book-sourdough-made-on-manning.jpg',
      url: 'https://madeonmanning.square.site/product/book-sourdough-made-on-manning/7UX67ZO6PERWVNX3MXFNM6NA'
    }
  ];

  return (
    <div className="page-section books-page">
      <h1 className="page-title">My Books</h1>
      <p className="intro-text">
        Take a peak into my world of baking with this collection of books. Each book is filled with recipes, tips, and stories from my home to yours.
      </p>

      {bookItems.map((item, index) => (
        <section key={item.id} className={`book-item ${index % 2 !== 0 ? 'inverted-layout' : ''}`}>
          <h2 className="section-heading">{item.name}</h2>
          <div className="item-content">
            <div className="book-image-container">
              <img src={item.image} alt={item.name} className="book-image" />
            </div>
            <div className="item-details">
              <p>{item.story}</p>
              <p><b>What&apos;s Included:</b></p>
              <ul>
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <p>
                <b>Pricing:</b> {item.cost}
              </p>
              <a href={item.url} target="_blank" rel="noopener" className="book-order-button">Order {item.name}</a>
            </div>
          </div>
        </section>
      ))}

      <div className="inquiry-call-to-action">
        <p>Interested in ordering one or both of these books? <Link href="/contact">Contact me</Link> or visit <a href='https://madeonmanning.square.site/'>my online store</a>.</p>
        <a href="https://madeonmanning.square.site/" target="_blank" rel="noopener" className="main-inquiry-button">Order Here</a>
      </div>

    </div>
  );
}

export default Books;

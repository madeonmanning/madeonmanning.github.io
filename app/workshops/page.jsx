import React from 'react';
import '../globals.css';
import './Workshops.css';
import Link from 'next/link';

function Workshops() {
  const workshops = [
    {
      id: 1,
      images: [
        '/workshop-sourdough-1.jpg',
        '/workshop-sourdough-2.jpg',
        '/workshop-sourdough-3.jpg',
        '/workshop-sourdough-4.jpg'
      ],
      title: 'Sourdough Workshop',
      description: 'Now offering in-person, hands-on, beginner sourdough classes taught at my home in Woodbury, Minnesota. You can look forward to a fun and casual 2.5 hour workshop that will teach you how to feed, use, and maintain a sourdough starter in an approachable way. Then we will walk through the 4 basic steps for making sourdough bread; stretch + folds, shaping, scoring, and baking. You\'ll take home your own personal starter and a finished loaf of bread!',
      cost: '$400',
      participants: 'Up to 4 participants',
      includes: [
        '2.5 hour, hands on instructions for how to create a loaf of sourdough from start to finish',
        'A jar of live/active sourdough starter for you to take home',
        'Instructional booklet with step by step directions to follow',
        'A packet of some tried and true sourdough recipes',
        'A freshly baked loaf of bread'
      ]
    }
  ];

  return (
    <div className="page-section workshops-page">
      <h1 className="page-title">Workshops</h1>
      <div className="workshops-container">
        {workshops.map(workshop => (
          <div key={workshop.id} className="workshop-card">
            <div className="workshop-image-grid">
              {workshop.images.map((image, index) => (
                <img key={index} src={image} alt={`${workshop.title} image ${index + 1}`} className="workshop-grid-image" />
              ))}
            </div>
            <div className="workshop-info">
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.description}</p>
              <p className="workshop-cost"><strong>Class cost:</strong> {workshop.cost}</p>
              <p className="workshop-participants"><strong></strong> {workshop.participants}</p>
              <div className="workshop-includes">
                <h4 className="workshop-includes-title">What is included:</h4>
                <ul>
                  {workshop.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="more-workshops-note">
        <p>Check back soon for more workshops!</p>
      </div>
      <div className="inquiry-section">
        <h2>Interested in a private workshop or have questions?</h2>
        <Link href="/contact" className="cta-button">Inquire Here</Link>
      </div>
    </div>
  );
}

export default Workshops;
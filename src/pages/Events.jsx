import React from 'react';
import './Events.css';
import './PageDefaults.css';

function Events() {
  // Placeholder data for events
  const events = [
    {
      id: 1,
      image: '/cupcake-1.jpg',
      date: 'August 15, 2025',
      time: '9:00 AM',
      title: 'Farmstand',
      description: 'Join us for a fun and interactive cupcake decorating workshop. Learn various piping techniques and create your own beautiful cupcakes to take home.',
      link: './farmstand',
      linkText: 'Learn More'
    },
    {
      id: 2,
      image: '/sugar-cookie-1.jpg',
      date: 'August 22, 2025',
      time: '9:00 AM',
      title: 'Farmstand',
      description: 'Take your cookie decorating skills to the next level. This workshop will cover advanced techniques like royal icing transfers and airbrushing.',
      link: '#',
      linkText: 'Learn More'
    },
    {
      id: 3,
      image: '/bulk-baking-1.jpg',
      date: 'August 29, 2025',
      time: '9:00 AM',
      title: 'Farmstand',
      description: 'Learn the art and science of sourdough bread making. From starter to finished loaf, we will guide you through the entire process.',
      link: '#',
      linkText: 'Learn More'
    },
    {
      id: 4,
      image: '/bulk-baking-1.jpg',
      date: 'September 10, 2025',
      time: '6:00 PM - 7:30 PM',
      title: 'Build Beautiful Bouquet',
      description: 'Learn the art and science of sourdough bread making. From starter to finished loaf, we will guide you through the entire process.',
      link: '#',
      linkText: 'Sign Up'
    },
    {
      id: 5,
      image: '/bulk-baking-1.jpg',
      date: 'October 17-18, 2025',
      time: '9:00AM - 5:00 PM',
      title: 'Makers Market',
      description: 'Learn the art and science of sourdough bread making. From starter to finished loaf, we will guide you through the entire process.',
      link: '#',
      linkText: 'Sign Up'
    }
  ];

  return (
    <div className="page-section events-page">
      <h1 className="page-title">Upcoming Events</h1>
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date-time">{event.date} | {event.time}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="cta-button">{event.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

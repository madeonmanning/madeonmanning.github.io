import React from 'react';
import '../globals.css';
import './Events.css';

function Events() {
  // Placeholder data for events
  const events = [
    {
      id: 1,
      image: '/bulk-baking-1.jpg',
      date: 'August 15, 2025',
      time: '9:00 AM',
      title: 'Farmstand - Classics',
      description: 'Come to the farmstand this Friday for all your classic favorites: Sourdough Raspberry White Chocolate Scones, Honey Molassess Sourdough Bread, Cinnamon Rolls, and more!',
      link: './farmstand',
      linkText: 'Farmstand Details'
    },
    {
      id: 2,
      image: '/bulk-baking-1.jpg',
      date: 'August 22, 2025',
      time: '9:00 AM',
      title: 'Farmstand - Peaches',
      description: 'Come to the farmstand this Friday for peach-themed bakes: Peach Jam, Peach Handpies, Peach Cinnamon Rolls, and more!',
      link: './farmstand',
      linkText: 'Farmstand Details'
    },
    {
      id: 3,
      image: '/bulk-baking-1.jpg',
      date: 'August 29, 2025',
      time: '9:00 AM',
      title: 'Farmstand - Apples',
      description: 'Come to the farmstand this Friday for a preview to fall with an apple-themed week.',
      link: './farmstand',
      linkText: 'Farmstand Details'
    },
    /*{
      id: 4,
      image: '/events-flowers.jpg',
      date: 'September 13, 2025',
      time: '9:00 AM - 11:00 AM',
      title: 'Backyard Bouquet Building',
      description: 'Come to my backyard to build your own bouquet using our end of summer blooms. Follow link below to sign up. Space is limited.',
      link: '#',
      linkText: 'Sign Up'
    },*/
    {
      id: 5,
      image: '/events-mm.jpg',
      date: 'October 24, 2025: 10:00 AM - 6:00 PM',
      time: 'October 25, 2025: 9:00 AM - 4:00 PM',
      title: 'Makers Market',
      description: 'Join us for a celebration of local artisans and unique crafts. Discover handmade goods, delicious food, and more.',
      link: '#',
      linkText: 'Details Coming Soon'
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

import React from 'react';
import '../globals.css';
import './Events.css';

function Events() {
  // Placeholder data for events
  const events = [
    /*{
      id: 1,
      image: '/bulk-baking-1.jpg',
      date: 'October 3, 2025',
      time: '9:00 AM - 5:00 PM',
      title: 'Porch Pickup',
      description: 'Order from a specialized menu and come pick up from my porch on October 3. Be one of the first people to get your hands on one of my new books.',
      link: 'https://forms.gle/7V1kTv2pbTfTPGrH8',
      linkText: 'Order Form'
    },*/
    /*{
      id: 2,
      image: '/events-farmstand-peach.jpg',
      date: 'August 22, 2025',
      time: '9:00 AM',
      title: 'Farmstand - Peaches',
      description: 'Come to the farmstand this Friday for peach-themed bakes: Peach Jam, Peach Handpies, Peach Cinnamon Rolls, and more!',
      link: './farmstand',
      linkText: 'Farmstand Details'
    },*/
    /*{
      id: 3,
      image: '/events-farmstand-apples.jpg',
      date: 'August 29, 2025',
      time: '9:00 AM',
      title: 'Farmstand - Apples',
      description: 'Come to the farmstand this Friday for a preview to fall with an apple-themed week: Apple Butter, Mini Apple Bundt Cakes, Apple Cinnamon Sourdough, Caramel Apple Cinnamon Rolls, and more!',
      link: './farmstand',
      linkText: 'Farmstand Details'
    },*/
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
      date: 'October 24, 2025',
      time: '10:00 AM - 6:00 PM',
      title: 'Makers Market',
      description: 'Join us for a celebration of local artisans and unique crafts. Discover handmade goods, delicious food, and more.',
      link: './makers-market',
      linkText: 'More Details'
    },
    {
      id: 6,
      image: '/events-mm.jpg',
      date: 'October 25, 2025',
      time: '9:00 AM - 4:00 PM',
      title: 'Makers Market',
      description: 'Join us for a celebration of local artisans and unique crafts. Discover handmade goods, delicious food, and more.',
      link: './makers-market',
      linkText: 'More Details'
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
              <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
              <a href={event.link} className="cta-button">{event.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

import React from 'react';
import './PageDefaults.css'; // Reusing common page styles
import FAQItem from '../components/FAQItem';

function Farmstand() {
// Array of your FAQ data
  const faqs = [
    {
      id: 1,
      question: 'Where are you located?',
      answer: 'The farmstand is located at the end of our driveway at 910 Manning Ave. S. Woodbury MN'
    },
    {
      id: 2,
      question: 'When are you open?',
      answer: 'The farmstand is out on Fridays throughout summer. We open at 9AM and are typically out until 5 (unless sold out sooner).'
    },
    {
      id: 3,
      question: 'How do I pay?',
      answer: 'The farmstand runs on honor system. There is no one there to collect payment but there is an option to drop cash in a locked cash box or my venmo QR code is posted.'
    },
    {
      id: 4,
      question: 'What do you have available?',
      answer: 'The menu changes each week. You will typically find some quintessential staples such as flowers, sourdough bread, & jam but you will also find seasonal specials made with ingredients grown right here at our home. (If you are looking for insider information about what will be available that week the best place to check is on my Instagram stories.)'
    },
    {
      id: 5,
      question: 'Where should I park?',
      answer: 'If you turn into our driveway there is parking available just past the farmstand on the grass along the northern side of the driveway. You can then use the turn around up by the house for ease when leaving. This helps decrease traffic and congestion at the end of the driveway for people coming and going.'
    },
    {
      id: 6,
      question: 'What ingredients do you use?',
      answer: 'I always do my best to choose high quality ingredients.\n\n>>All the flour used in my baked goods is organic which means it is unbleached and free from synthetic pesticides and fertilizers. I also do some baking with freshly milled grains.\n>>None of the baked goods I sell at the farmstand have any artificial colors in them so even your fun festive sugar cookies or delicious “M&M” cookies are made with dye free ingredients.'
    },
    {
      id: 7,
      question: 'Do you sell Gluten Free Baked goods?',
      answer: 'While I do have a few tried and true favorite GF bakes I make for family and friends, I have chosen not to sell any specific GF baked goods at the farmstand at this time. Because of all the baking I do on bake days and all the flour that is undoubtedly present, I do not want to risk any cross contamination for people where that might be a risk or an issue.'
    },
    {
      id: 8,
      question: 'Do you ever sell custom baked goods?',
      answer: 'Yes! I do take custom orders as my schedule allows. I typically take a lot fewer custom orders in the summer as my time is limited with all the baking I do for my weekly farmcart. If you are interested in more information on custom baked goods, fill out the inquiry form here. (insert link)'
    },
    {
      id: 9,
      question: 'Do you sell bulk flowers?',
      answer: 'Depending on when you event is I may be able to provide bulk flowers in buckets purchased “by the stem”. Feel free to reach out to madeonmanning@gmail.com for more information.'
    },
    {
      id: 10,
      question: 'What happens to the Farmcart when it is not summer time?',
      answer: 'During the colder months I switch to a “porch pickup” model of selling my baked goods. I typically offer 1-2 opportunities a month for people to preorder baked goods off a set menu and then pick them up from my home on a set date. The week before a porch pickup I will send out an email with a link to an order form. You fill out what you would like to order and then it will be waiting for you when it is time to pick up. If you would like to stay in the loop about upcoming porch pickup dates sign up to be on my email list here. (insert link)'
    },
  ];

  return (
    <div className="page-section farmstand-page">
      <h1 className="page-title">Our Weekly Farmstand</h1>
      <p>
        During the summer months of June through September join us at our home on Manning Avenue South in
        Woodbury, MN, for a delightful selection of homemade sourdough, fresh baked goods, and seasonal flowers.
        Our farmstand is a celebration of local ingredients and handmade quality.
      </p>
      <p>
        Our menu changes week to week, but you can expect to find an assortment of sourdough breads, pastries, cookies, and more from the bakery.
        Our flower summer bouquets will feature the freshest blooms from our garden.
        You might also find other homegrown or handcrafted items such as honey, maple syrup, or jams (depending on season).
      </p>

      {/* New FAQ Section */}
      <h3 className="faq-section-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map(faq => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <p>Follow us on Instagram for weekly updates on what's available!</p>
    </div>
  );
}

export default Farmstand;
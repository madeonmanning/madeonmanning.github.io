import React from 'react';
import '../globals.css';
import './MakersMarket.css';
import FAQItem from '../components/FAQItem';

export const metadata = {
  title: "Makers Market",
};

function MakersMarket() {
  const vendors = [
    {
      name: 'Anna Stark Art',
      instagram: 'https://www.instagram.com/anna_stark_art/',
      image: '/mmvendor-anna-stark-art.jpg',
      bio: 'Anna is a self-taught oil painter, a 90\'s kid at heart and a firm believer that childhood isn\'t just a chapter, it\'s a feeling we carry with us. Her goal is to stir up sentimental feelings and evoke the simple joy and happiness we carry from childhood.',
    },
    {
      name: 'Border Bluff Designs',
      instagram: 'https://www.instagram.com/border_bluff_designs/',
      image: '/mmvendor-border-bluff-designs.jpg',
      bio: 'Meet Katie, the one-woman maker behind Border Bluff Designs. She handcrafts everything from charcuterie boards and coasters to modern mosaics and wall décor. Each piece is made with care and creativity, bringing a unique touch of fun, seasonal style to your home.',
    },
    {
      name: 'Burnt at Both Ends Candle Co.',
      instagram: 'https://www.instagram.com/burntatbothendscandleco/',
      image: '/mmvendor-burnt-at-both-ends.jpg',
      bio: 'Burnt at Both Ends Candle Co. is a proudly woman-owned home fragrance brand dedicated to bringing calm, comfort, and character to your space. They handcraft a full line of soy candles, wax melts, room sprays, and diffusers—each product is thoughtfully designed to elevate your everyday with incredible scent.',
    },
    {
      name: 'Carved & Clay',
      instagram: 'https://www.instagram.com/carvedandclay/',
      image: '/mmvendor-carved-and-clay.jpg',
      bio: 'Janessa creates all sorts of fun things for your home. Each piece is hand-shaped and carved with care, inspired by the textures of the forest and the warmth of home.',
    },
    {
      name: 'Compass Pointe Goods',
      instagram: 'https://www.instagram.com/compasspointegoods/',
      image: '/mmvendor-compass-pointe-goods.jpg',
      bio: 'Christa is a home-based baker serving up a delicious assortment of goodies. From flaky scones and chewy brownies to crunchy granola and classic cookies, you\'re bound to find the perfect treat to satisfy your craving.',
    },
    /*{
      name: 'Hedrix Homemade',
      instagram: '#',
      image: '/mmvendor-hedrix-homemade.jpg',
      bio: 'Founded by Anna and her husband Jason, Hedrix Homemade creates homemade elderberry syrup using organic ingredients and local honey. As former teachers who battled \'sick season\' germs, they are passionate about helping others boost their immunity. They love sharing their favorite natural remedy with the community!',
    },*/
    {
      name: 'Kindred Goods',
      instagram: 'https://www.instagram.com/kindred_goods/',
      image: '/mmvendor-kindred-goods.jpg',
      bio: 'Kindred Goods sells beautiful textiles with a powerful purpose. Lizzie Hunt and her husband support women and families in impoverished nations through their ministry. Every purchase helps provide a sustainable income for these women, empowering them to support their children and the elderly in their communities.',
    },
    {
      name: 'Made on Manning',
      instagram: 'https://www.instagram.com/made_on_manning/',
      image: '/bulk-baking-1.jpg',
      bio: 'Made on Manning is an eclectic collection of all things homemade and handcrafted. From savory sourdough bread to warm cinnamon rolls, and from stunning textiles to beautiful pottery, Sarah loves to dabble in it all!',
    },
    {
      name: 'Marshmallbos',
      instagram: 'https://www.instagram.com/marshmallbos/',
      image: '/mmvendor-marshmallbos.jpg',
      bio: 'Marshmallbos is a charming business spearheaded by 13-year-old Bo, who specializes in making delicious, gourmet marshmallows. Stop by to try this family favorite for yourself, or pick up a bag for the perfect gift!',
    },
    {
      name: 'MeadowLark Design Co.',
      instagram: 'https://www.instagram.com/meadowlarkdesign_co/',
      image: '/mmvendor-meadowlark-design-co.jpg',
      bio: 'Meadowlark Design Co. offers a curated collection of vintage and bespoke items to add layers of whimsy and charm to your home. Find unique pieces inspired by the beauty of nature and the celebration of the seasons.',
    },
    {
      name: 'Minnesota Made by Jenni',
      instagram: 'https://www.instagram.com/minnesotamadebyjenni/',
      image: '/mmvendor-minnesota-made-by-jenni.jpg',
      bio: 'Jenni St. Cyr is a Minnesota artist who brings her love of crafting and nature together to create one-of-a-kind pressed flower art. Using local wildflowers and botanicals, each piece is a thoughtful, unique keepsake to treasure for years to come.',
    },
    {
      name: 'The Scented Stove',
      instagram: 'https://www.instagram.com/thescentedstovemn/',
      image: '/mmvendor-the-scented-stove.jpg',
      bio: 'Mailee crafts scented simmer pots that will make your home smell amazing all day. With scents ranging from cozy fall to festive Christmas, all you need is a pot and water to fill your space with a beautiful aroma. They make the perfect gift—or a special treat for yourself!',
    },
  ];

  const faqs = [
    {
      id: 2,
      question: 'Where should I park?',
      answer: 'This market is located on private property. When you turn off of Manning Avenue, you are welcome to park along both sides of the driveway. The barn is located at the back of the property.',
    },
    {
      id: 3,
      question: 'Can I bring my kids?',
      answer: 'Yes! This is a family-friendly event. We will have a bouncy house and other kids\' activities set up in the backyard for them to enjoy.',
    },
    {
      id: 4,
      question: 'What payment methods are accepted?',
      answer: 'Each vendor accepts various payment methods, including cash and Venmo. Some vendors may also have the option for card payments.',
    },
    {
      id: 5,
      question: 'What should I bring?',
      answer: 'Your sister, neighbor, bestie, lady from the grocery store. Anyone! Also a basket or tote for shopping if you would like :)',
    },
  ];

  return (
    <div className="page-section makers-market-page">
      <h1 className="page-title">Makers Market</h1>

      <div className="makers-market-intro-content">
        <img
          src="/events-mm.jpg"
          alt="Makers Market"
          className="makers-market-intro-image"
        />
        <div className="makers-market-intro-text intro-text">
          <p>
            Enjoy artisanal, handcrafted goods from a curated collection of specialty vendors and local small businesses at our barn in Woodbury, MN.
            Find custom home decore, sourdough bread, fresh baked treats, seasonal items and more and get a jump start on your holiday shopping with unique, 
            seasonal gifts. Warm beverages and kids&apos; activities in the backyard will be available for everyone to enjoy!
          </p>
          <p>
            October 24, 2025 | 10:00 AM - 6:00 PM<br />
            October 25, 2025 | 9:00 AM - 4:00 PM<br />
            <i>Live bluegrass band 12PM-3PM on Saturday!</i>
          </p>
          <div className="bold-text">
            <p>Hosted by Made on Manning</p>
          </div>
          <p>
            910 Manning Ave S<br/>
            Woodbury, MN 55129
          </p>
        </div>
      </div>

      <h3 className="vendor-section-title">Our Vendors</h3>
      <div className="vendor-list">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor-item">
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <div className="vendor-info">
              <h2>
                <a href={vendor.instagram} target="_blank" rel="noopener noreferrer">
                  {vendor.name}
                </a>
              </h2>
              <p>{vendor.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="faq-section-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map(faq => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default MakersMarket;

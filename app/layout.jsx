import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css"; // This import is crucial
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './lib/fontawesome';

export const metadata = {
  title: 'Made on Manning',
  /*description: 'Farmstand and Bakery',*/
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>  
        <link rel="icon" href="/favicon-96x96.png" type="any" />
      </head>

      <body>
        <div className="layout-container">
          <header className="site-header">
            <div className="header-content">
              <Link href="/" className="site-logo">
                <img src={"/favicon-96x96.png"} alt="Made on Manning Logo" className="site-logo-image" />
                Made on Manning
              </Link>
              <nav className="main-nav">
                <ul>
                  <li><Link href="/farmstand">Farmstand</Link></li>
                  <li><Link href="/bakery">Bakery</Link></li>
                  <li><Link href="/events">Events</Link></li>
                  <li><Link href="/workshops">Workshops</Link></li>
                  <li><Link href="/rentals">Rentals</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="site-content">
            {children} {/* This is where your page content will be rendered */}
          </main>

          <footer className="site-footer">
            <div className="footer-content">
              <p>&copy; {new Date().getFullYear()} Made on Manning. All rights reserved.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/made_on_manning" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href="mailto:madeonmanning@gmail.com" rel="noopener noreferrer" aria-label="Email">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                </a>
              </div>
            </div>
          </footer>
        </div>
        <GoogleAnalytics gaId="G-BY0H0G1CQK" />
      </body>
    </html>
  );
}

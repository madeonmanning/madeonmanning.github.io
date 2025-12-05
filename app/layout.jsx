import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css"; // This import is crucial
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './lib/fontawesome';
import Header from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata = {
  title: {
    default: "Made on Manning",
    template: "Made on Manning - %s",
  },
  description: "Made on Manning - Homemade baked goods, farmstand produce, workshops, and event rentals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>  
        <link rel="icon" href="/favicon-96x96.png" type="any" />
      </head>

      <body>
        <div className="layout-container">
          <Header />

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


import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import the CSS for the layout

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="site-header">
        <div className="header-content">
          <Link to="/" className="site-logo">Made on Manning</Link>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/farmstand">Farmstand</Link></li>
              <li><Link to="/rentals">Rentals</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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
            {/* Placeholder for social media icons/links */}
            <a href="https://www.instagram.com/made_on_manning/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:madeonmanning@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
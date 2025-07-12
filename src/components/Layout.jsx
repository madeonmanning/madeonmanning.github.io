import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import the CSS for the layout

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="site-header">
        <div className="header-content">
          <Link to="/" className="site-logo">
            <img src={"/favicon-96x96.png"} alt="Made on Manning Logo" className="site-logo-image" />
            Made on Manning
          </Link>
          <nav className="main-nav">
            <ul>
              <li><Link to="/farmstand">Farmstand</Link></li>
              <li><Link to="/bakery">Bakery</Link></li>
              {/*<li><Link to="/workshops">Workshops</Link></li> 
              <li><Link to="/rentals">Rentals</Link></li>*/}
              <li><Link to="/about">About</Link></li>
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
              <i className="fab fa-instagram"></i> {/* Font Awesome Instagram icon */}
            </a>
            <a href="mailto:madeonmanning@gmail.com" rel="noopener noreferrer" aria-label="Email">
              <i className="fas fa-envelope"></i> {/* Font Awesome Email icon */}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavMenu.css';
import '../lib/fontawesome';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="site-logo">
          <img src={"/favicon-96x96.png"} alt="Made on Manning Logo" className="site-logo-image" />
          Made on Manning
        </Link>
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li><Link href="/farmstand" onClick={closeMobileMenu}>Farmstand</Link></li>
            <li><Link href="/bakery" onClick={closeMobileMenu}>Bakery</Link></li>
            <li><Link href="/events" onClick={closeMobileMenu}>Events</Link></li>
            <li><Link href="/workshops" onClick={closeMobileMenu}>Workshops</Link></li>
            <li><Link href="/rentals" onClick={closeMobileMenu}>Rentals</Link></li>
            <li><Link href="/books" onClick={closeMobileMenu}>Books</Link></li>
            <li><Link href="/about" onClick={closeMobileMenu}>About</Link></li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
}

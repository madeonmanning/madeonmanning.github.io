import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Farmstand from './pages/Farmstand';
import Bakery from './pages/Bakery'; 
import Workshops from './pages/Workshops';
import Rentals from './pages/Rentals';
import ContactUs from './pages/ContactUs';

import './App.css'; // You can keep this for general app-wide styles

// Helper component to track route changes
function GATracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available before trying to send data
    if (window.gtag) {
      window.gtag('config', 'YOUR_GA4_MEASUREMENT_ID', {
        'page_path': location.pathname + location.search,
        'page_title': document.title
      });
    }
  }, [location]); // Re-run this effect whenever the location changes

  return null; // This component doesn't render anything visible
}

function App() {
  return (
    <Router>
      <GATracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmstand" element={<Farmstand />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add a fallback for unmatched routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Farmstand from './pages/Farmstand';
import Rentals from './pages/Rentals';
import ContactUs from './pages/ContactUs';

import './App.css'; // You can keep this for general app-wide styles

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmstand" element={<Farmstand />} />
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
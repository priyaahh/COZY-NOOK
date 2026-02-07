import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cafe from './pages/Cafe';
import Bookstore from './pages/Bookstore';
import FlowerShop from './pages/FlowerShop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cozy-beige font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/flowers" element={<FlowerShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

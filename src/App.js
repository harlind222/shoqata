import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import HowWeDoIt from './components/HowWeDoIt';
import TheTeam from './components/TheTeam';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetailModal';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/howwedoit" element={<HowWeDoIt />} />
        <Route path="/theteam" element={<TheTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetail />} /> {/* Rruga për detajet e shërbimeve */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

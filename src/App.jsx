// src/App.js or src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage';
import { HomePage } from './pages/homePage';

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/pools" element={<HomePage />} />
   </Routes>
  </Router>
 );
};

export default App;

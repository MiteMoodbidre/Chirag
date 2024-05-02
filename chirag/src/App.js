// App.js

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Sales from './Components/Sales.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Sales" element={<Sales/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

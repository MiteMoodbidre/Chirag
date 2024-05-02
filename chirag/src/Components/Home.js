// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="App">
      <header>
        <h1>CHIRAG HOME INDUSTRIES</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sales">Sales</Link></li>
            <li><Link to="/Purchase">Purchase</Link></li>
            <li><Link to="/RawMaterial">Raw Material</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {/* Your content here */}
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
// import './App.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <div className="App">
      <header>
        <h1>CHIRAG HOME INDUSTRIES</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Sales</a></li>
            <li><a href="/">Purchase</a></li>
            <li><a href="/">Raw Material</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {/* Your content here */}
      </div>
    </div>
  );
}

export default Navbar;

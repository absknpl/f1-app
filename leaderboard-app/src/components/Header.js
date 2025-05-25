import React from 'react';

const Header = ({ setCurrentView }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>F1 Interactive Leaderboard</h1>
        <nav className="main-nav">
          <button onClick={() => setCurrentView('leaderboard')}>Current Standings</button>
          <button onClick={() => setCurrentView('scenario')}>Race Scenario</button>
          <button onClick={() => setCurrentView('calculator')}>Points Calculator</button>
          <button onClick={() => setCurrentView('customize')}>Customize View</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
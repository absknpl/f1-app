import React from 'react';

const Header = ({ setCurrentView }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-container" onClick={() => setCurrentView('leaderboard')}>
          <div className="f1-logo-mark"></div>
          <div className="logo-text">
            <h1 className="main-title">CHAMPIONSHIP PREDICTOR</h1>
            <div className="season-subtitle">2025 SEASON</div>
          </div>
        </div>
        <nav className="main-nav">
          <button onClick={() => setCurrentView('leaderboard')}>
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Standings</span>
          </button>
          <button onClick={() => setCurrentView('scenario')}>
            <span className="nav-icon">🏁</span>
            <span className="nav-text">Simulator</span>
          </button>
          <button onClick={() => setCurrentView('calculator')}>
            <span className="nav-icon">🧮</span>
            <span className="nav-text">Calculator</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
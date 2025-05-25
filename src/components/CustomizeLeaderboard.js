import React from 'react';

const CustomizeLeaderboard = ({ customization, setCustomization }) => {
  const toggleOption = (option) => {
    setCustomization(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className="customize-container">
      <h2>Customize Leaderboard View</h2>
      <div className="customize-options">
        <label className="customize-option">
          <input
            type="checkbox"
            checked={customization.showTeams}
            onChange={() => toggleOption('showTeams')}
          />
          Show Teams
        </label>
        
        <label className="customize-option">
          <input
            type="checkbox"
            checked={customization.showPoints}
            onChange={() => toggleOption('showPoints')}
          />
          Show Points
        </label>
        
        <label className="customize-option">
          <input
            type="checkbox"
            checked={customization.showWins}
            onChange={() => toggleOption('showWins')}
          />
          Show Wins
        </label>
        
        <label className="customize-option">
          <input
            type="checkbox"
            checked={customization.showPodiums}
            onChange={() => toggleOption('showPodiums')}
          />
          Show Podiums
        </label>
        
        <label className="customize-option">
          <input
            type="checkbox"
            checked={customization.showLastRace}
            onChange={() => toggleOption('showLastRace')}
          />
          Show Last Race Result
        </label>
      </div>
    </div>
  );
};

export default CustomizeLeaderboard;
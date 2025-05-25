import React, { useState } from 'react';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import ScenarioForm from './components/ScenarioForm';
import ScenarioResults from './components/ScenarioResults';
import PointsCalculator from './components/PointsCalculator';
import CustomizeLeaderboard from './components/CustomizeLeaderboard';
import Footer from './components/footer';
import './styles/main.css';
import './styles/theme.css';

function App() {
  const [currentView, setCurrentView] = useState('leaderboard');
  const [scenarioResults, setScenarioResults] = useState(null);
  const [customization, setCustomization] = useState({
    showTeams: true,
    showPoints: true,
    showWins: true,
    showPodiums: true,
    showLastRace: true
  });

  return (
    <div className="app">
      <Header setCurrentView={setCurrentView} />
      
      <main className="main-content">
        {currentView === 'leaderboard' && (
          <Leaderboard customization={customization} />
        )}
        
        {currentView === 'scenario' && (
          <div className="scenario-container">
            <ScenarioForm setScenarioResults={setScenarioResults} />
            {scenarioResults && <ScenarioResults results={scenarioResults} />}
          </div>
        )}
        
        {currentView === 'calculator' && <PointsCalculator />}
        
        {currentView === 'customize' && (
          <CustomizeLeaderboard 
            customization={customization} 
            setCustomization={setCustomization} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
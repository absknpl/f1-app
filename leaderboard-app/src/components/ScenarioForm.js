import React, { useState } from 'react';
import { currentStandings, getUpcomingRaces } from '../utils/f1Data';
import { calculateScenario } from '../utils/calculations';

const ScenarioForm = ({ setScenarioResults }) => {
  const upcomingRaces = getUpcomingRaces();
  const [selectedRace, setSelectedRace] = useState(upcomingRaces[0]?.name || '');
  const [raceResults, setRaceResults] = useState(
    Array(20).fill().map((_, i) => ({ position: i + 1, driver: '' }))
  );

  const handleDriverChange = (position, driver) => {
    const newResults = [...raceResults];
    newResults[position - 1] = { position, driver };
    setRaceResults(newResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRace) return;
    
    const results = calculateScenario(selectedRace, raceResults);
    setScenarioResults(results);
  };

  const handleReset = () => {
    setRaceResults(Array(20).fill().map((_, i) => ({ position: i + 1, driver: '' })));
    setScenarioResults(null);
  };

  return (
    <div className="scenario-form">
      <h2>Create Race Scenario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="race-select">Select Race:</label>
          <select 
            id="race-select"
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            required
          >
            <option value="">Select a race</option>
            {upcomingRaces.map(race => (
              <option key={race.id} value={race.name}>
                {race.name} ({new Date(race.date).toLocaleDateString()})
              </option>
            ))}
          </select>
        </div>

        <div className="race-results-input">
          <h3>Enter Race Results:</h3>
          <div className="results-grid">
            {raceResults.map(result => (
              <div key={result.position} className="result-input">
                <span className="position">{result.position}.</span>
                <select
                  value={result.driver}
                  onChange={(e) => handleDriverChange(result.position, e.target.value)}
                >
                  <option value="">Select Driver</option>
                  {currentStandings.map(driver => (
                    <option key={driver.id} value={driver.id}>
                      {driver.name} ({driver.team})
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="calculate-btn">
            Calculate Scenario
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScenarioForm;
import React, { useState } from 'react';
import { currentStandings, racesRemaining } from '../utils/f1Data';
import { calculateScenario } from '../utils/calculations';

const ScenarioForm = ({ setScenarioResults }) => {
  const [selectedRace, setSelectedRace] = useState(racesRemaining[0].name);
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
    const results = calculateScenario(selectedRace, raceResults);
    setScenarioResults(results);
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
          >
            {racesRemaining.map(race => (
              <option key={race.id} value={race.name}>{race.name}</option>
            ))}
          </select>
        </div>

        <div className="race-results-input">
          <h3>Enter Race Results:</h3>
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

        <button type="submit" className="calculate-btn">
          Calculate Scenario
        </button>
      </form>
    </div>
  );
};

export default ScenarioForm;
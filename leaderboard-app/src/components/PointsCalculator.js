import React, { useState } from 'react';
import { currentStandings, getUpcomingRaces } from '../utils/f1Data';
import { calculatePointsNeeded } from '../utils/calculations';

const PointsCalculator = () => {
  const [selectedDriver1, setSelectedDriver1] = useState(currentStandings[0]?.id || '');
  const [selectedDriver2, setSelectedDriver2] = useState(currentStandings[1]?.id || '');
  const [calculationResult, setCalculationResult] = useState(null);

  const upcomingRaces = getUpcomingRaces();

  const handleCalculate = () => {
    if (!selectedDriver1 || !selectedDriver2) return;
    
    const result = calculatePointsNeeded(selectedDriver1, selectedDriver2);
    setCalculationResult(result);
  };

  return (
    <div className="points-calculator">
      <h2>Points Difference Calculator</h2>
      <div className="calculator-form">
        <div className="driver-selection">
          <div className="form-group">
            <label>Driver 1 (Leader):</label>
            <select
              value={selectedDriver1}
              onChange={(e) => setSelectedDriver1(e.target.value)}
            >
              {currentStandings.map((driver, index) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} ({driver.points} pts)
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Driver 2 (Chaser):</label>
            <select
              value={selectedDriver2}
              onChange={(e) => setSelectedDriver2(e.target.value)}
            >
              {currentStandings.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} ({driver.points} pts)
                </option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={handleCalculate} className="calculate-btn">
          Calculate Points Needed
        </button>

        {calculationResult && (
          <div className="calculation-result">
            <h3>Results:</h3>
            <p>
              <strong>{calculationResult.driver2.name}</strong> needs to gain 
              <strong> {calculationResult.pointsNeeded} points</strong> on 
              <strong> {calculationResult.driver1.name}</strong> in the remaining 
              <strong> {upcomingRaces.length} races</strong> to win the championship.
            </p>
            <p>
              Average points per race needed: <strong>{calculationResult.avgPerRace.toFixed(1)}</strong>
            </p>
            <p>
              Maximum possible points remaining: <strong>{upcomingRaces.length * 26}</strong> (25 for win + 1 for fastest lap)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PointsCalculator;
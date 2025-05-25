import React, { useState, useEffect } from 'react';
import { get2025Standings, get2025UpcomingRaces } from '../utils/f1Data';
import { calculatePointsDifference } from '../utils/calculations';

const PointsCalculator = () => {
  const [standings, setStandings] = useState([]);
  const [upcomingRaces, setUpcomingRaces] = useState([]);
  const [selectedDriver1, setSelectedDriver1] = useState('');
  const [selectedDriver2, setSelectedDriver2] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const standingsData = get2025Standings();
      const racesData = get2025UpcomingRaces();
      setStandings(standingsData);
      setUpcomingRaces(racesData);
      if (standingsData.length > 1) {
        setSelectedDriver1(standingsData[0].id);
        setSelectedDriver2(standingsData[1].id);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  const handleCalculate = () => {
    if (!selectedDriver1 || !selectedDriver2) return;
    const result = calculatePointsDifference(
      selectedDriver1,
      selectedDriver2,
      standings,
      upcomingRaces
    );
    setCalculationResult(result);
  };

  if (loading) return <div className="loading">Loading 2025 data...</div>;

  return (
    <div className="points-calculator">
      <h2>2025 Championship Points Calculator</h2>
      <div className="calculator-form">
        <div className="driver-selection">
          <div className="form-group">
            <label>Current Leader:</label>
            <select
              value={selectedDriver1}
              onChange={(e) => setSelectedDriver1(e.target.value)}
            >
              {standings.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} ({driver.team}) - {driver.points} pts
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Challenger:</label>
            <select
              value={selectedDriver2}
              onChange={(e) => setSelectedDriver2(e.target.value)}
            >
              {standings.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} ({driver.team}) - {driver.points} pts
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
            <h3>2025 Championship Outlook:</h3>
            <p>
              <strong>{calculationResult.driver2.name}</strong> needs to gain 
              <strong> {calculationResult.pointsNeeded} points</strong> on 
              <strong> {calculationResult.driver1.name}</strong> over 
              <strong> {calculationResult.racesLeft} races</strong> to win.
            </p>
            <p>
              Average needed per race: <strong>{calculationResult.avgPerRace.toFixed(1)} points</strong>
            </p>
            <p>
              Maximum points available: <strong>{calculationResult.maxPossiblePoints}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PointsCalculator;
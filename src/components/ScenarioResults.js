import React from 'react';
import { get2025Standings } from '../utils/f1Data';

const ScenarioResults = ({ results }) => {
  const currentStandings = get2025Standings();
  
  if (!results) return null;

  return (
    <div className="scenario-results">
      <h3>2025 Projection After {results.race}</h3>
      <div className="results-comparison">
        <div className="current-standings">
          <h4>Current Standings</h4>
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {currentStandings.slice(0, 10).map(driver => (
                <tr key={driver.id}>
                  <td>{driver.position}</td>
                  <td>{driver.name}</td>
                  <td>{driver.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="projected-standings">
          <h4>Projected Standings</h4>
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Points</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {results.standings.slice(0, 10).map(driver => {
                const currentDriver = currentStandings.find(d => d.id === driver.id);
                const positionChange = currentDriver ? currentDriver.position - driver.position : 0;
                const pointsChange = driver.points - (currentDriver?.points || 0);
                
                return (
                  <tr key={driver.id}>
                    <td>{driver.position}</td>
                    <td>{driver.name}</td>
                    <td>{driver.points}</td>
                    <td className={
                      positionChange > 0 ? 'positive' : 
                      positionChange < 0 ? 'negative' : ''
                    }>
                      {positionChange !== 0 && `${positionChange > 0 ? '+' : ''}${positionChange}`}
                      {pointsChange > 0 && ` (+${pointsChange})`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScenarioResults;
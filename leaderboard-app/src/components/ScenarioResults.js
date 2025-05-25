import React from 'react';
import { currentStandings } from '../utils/f1Data';
const ScenarioResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className="scenario-results">
      <h3>Scenario Results for {results.race}</h3>
      <div className="results-notice">
        <p>This is how the standings would look if these results happened:</p>
      </div>
      
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {results.standings.map((driver, index) => {
            const currentStanding = currentStandings.find(d => d.id === driver.id);
            const positionChange = currentStanding 
              ? currentStanding.position - (index + 1)
              : 0;
            
            return (
              <tr key={driver.id} className={`driver-row ${driver.team.toLowerCase()}`}>
                <td>{index + 1}</td>
                <td>{driver.name}</td>
                <td>{driver.team}</td>
                <td className="points">{driver.points}</td>
                <td className={positionChange > 0 ? 'positive' : positionChange < 0 ? 'negative' : ''}>
                  {positionChange > 0 ? `+${positionChange}` : positionChange}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScenarioResults;
import React, { useState, useEffect } from 'react';
import { get2025Standings, load2025Data, refresh2025Data } from '../utils/f1Data';

const Leaderboard = ({ customization }) => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadStandings = async () => {
    try {
      setLoading(true);
      await load2025Data();
      const updatedStandings = get2025Standings();
      setStandings(updatedStandings);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Error loading standings:', err);
      setError('Failed to load standings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      await refresh2025Data();
      const refreshedStandings = get2025Standings();
      setStandings(refreshedStandings);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Error refreshing standings:', err);
      setError('Failed to refresh data. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStandings();
  }, []);

  if (loading && standings.length === 0) {
    return <div className="loading">Loading 2025 standings...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={loadStandings} className="refresh-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>2025 FIA Formula One World Championship</h2>
        <div className="leaderboard-controls">
          <button onClick={handleRefresh} className="refresh-btn" disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </button>
          {lastUpdated && (
            <div className="last-updated">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            {customization.showTeams && <th>Team</th>}
            <th>Points</th>
            {customization.showWins && <th>Wins</th>}

          </tr>
        </thead>
        <tbody>
          {standings.map(driver => (
            <tr 
              key={driver.id} 
              className={`driver-row ${driver.team.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <td>{driver.position}</td>
              <td>
                <span className="driver-number">{driver.number}</span>
                {driver.name}
              </td>
              {customization.showTeams && <td>{driver.team}</td>}
              <td className="points">{driver.points}</td>
              {customization.showWins && <td>{driver.wins}</td>}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
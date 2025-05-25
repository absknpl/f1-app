import React, { useState, useEffect, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { get2025Standings, get2025UpcomingRaces, load2025Data } from '../utils/f1Data';
import { calculate2025Scenario } from '../utils/calculations';

const ScenarioForm = ({ setScenarioResults }) => {
  const [originalStandings, setOriginalStandings] = useState([]);
  const [modifiedStandings, setModifiedStandings] = useState([]);
  const [upcomingRaces, setUpcomingRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const initializeData = async () => {
      await load2025Data();
      const standings = get2025Standings();
      const races = get2025UpcomingRaces();
      setOriginalStandings([...standings]);
      setModifiedStandings([...standings]);
      setUpcomingRaces(races);
      setSelectedRace(races[0]?.name || '');
      setIsLoading(false);
    };
    initializeData();
  }, []);

  // Reset to original standings
  const handleReset = () => {
    setModifiedStandings([...originalStandings]);
    setScenarioResults(null);
  };

  // Drag and drop handler
  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    
    const items = Array.from(modifiedStandings);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setModifiedStandings(items.map((item, index) => ({
      ...item,
      position: index + 1
    })));
  }, [modifiedStandings]);

  // Calculate scenario
  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculate2025Scenario(
      selectedRace,
      modifiedStandings.map((d, i) => ({ position: i + 1, driver: d.id })),
      [],
      originalStandings
    );
    setScenarioResults(results);
  };

  if (isLoading) return <div className="loading">Loading 2025 season data...</div>;

  return (
    <div className="scenario-form">
      <form onSubmit={handleSubmit}>
        {/* Race selection dropdown */}
        <div className="form-group">
          <label>Select Grand Prix:</label>
          <select
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            required
          >
            {upcomingRaces.map(race => (
              <option key={race.id} value={race.name}>
                {race.name} ({race.circuit})
              </option>
            ))}
          </select>
        </div>

        {/* Drag and drop interface */}
        <div className="race-results-input">
          <h3>Set Race Finish Order:</h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="drivers">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="driver-list">
                  {modifiedStandings.map((driver, index) => (
                    <Draggable key={driver.id} draggableId={driver.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="driver-item"
                        >
                          <span className="position">{index + 1}.</span>
                          <div className="driver-info">
                            <span className="driver-name">{driver.name}</span>
                            <span className="driver-team">{driver.team}</span>
                            <span className="driver-points">{driver.points} pts</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* Action buttons */}
        <div className="form-actions">
          <button type="submit" className="calculate-btn">
            Calculate Projection
          </button>
          <button 
            type="button" 
            onClick={handleReset} 
            className="reset-btn"
          >
            Reset Projection
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScenarioForm;
import React, { useState, useCallback } from 'react';
import { currentStandings, getUpcomingRaces } from '../utils/f1Data';
import { calculateScenario } from '../utils/calculations';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const ScenarioForm = ({ setScenarioResults }) => {
  const upcomingRaces = getUpcomingRaces();
  const [selectedRace, setSelectedRace] = useState(upcomingRaces[0]?.name || '');

  // Auto-fill with current standings
  const initialResults = currentStandings.slice(0, 20).map((driver, index) => ({
    id: driver.id,
    position: index + 1,
    driver: driver.id
  }));

  const [raceResults, setRaceResults] = useState(initialResults);

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateScenario(selectedRace, raceResults);
    setScenarioResults(results);
  };

  const handleReset = () => {
    setRaceResults(initialResults);
    setScenarioResults(null);
  };

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    
    const items = Array.from(raceResults);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update positions based on new order
    const reorderedResults = items.map((item, index) => ({
      ...item,
      position: index + 1
    }));

    setRaceResults(reorderedResults);
  }, [raceResults]);

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
          <h3>Drag drivers to set finishing order:</h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="drivers">
              {(provided) => (
                <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="driver-list"
                >
                  {raceResults.map((result, index) => {
                    const driver = currentStandings.find(d => d.id === result.driver);
                    return (
                      <Draggable 
                        key={driver.id}
                        draggableId={driver.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="driver-item"
                          >
                            <span className="position">{result.position}.</span>
                            <div className="driver-info">
                              <span className="driver-name">{driver.name}</span>
                              <span className="driver-team">{driver.team}</span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="form-actions">
          <button type="submit" className="calculate-btn">
            Calculate Scenario
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset to Current Standings
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScenarioForm;
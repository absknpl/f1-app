import { pointsSystem2025 } from './f1Data';

export const calculate2025Scenario = (raceName, raceResults, sprintResults = [], currentStandings) => {
  const newStandings = JSON.parse(JSON.stringify(currentStandings));

  // Calculate race points
  raceResults.forEach(result => {
    const driver = newStandings.find(d => d.id === result.driver);
    if (!driver) return;
    
    const pointsToAdd = pointsSystem2025.race[result.position] || 0;
    driver.points += pointsToAdd;
    
    if (result.position === 1) driver.wins += 1;
    if (result.position <= 3) driver.podiums = (driver.podiums || 0) + 1;
  });

  // Calculate sprint points
  sprintResults.forEach(result => {
    const driver = newStandings.find(d => d.id === result.driver);
    if (!driver) return;
    
    const pointsToAdd = pointsSystem2025.sprint[result.position] || 0;
    driver.points += pointsToAdd;
    driver.sprintPoints = (driver.sprintPoints || 0) + pointsToAdd;
  });

  // Update positions
  newStandings.sort((a, b) => b.points - a.points);
  newStandings.forEach((driver, index) => {
    driver.position = index + 1;
  });
  
  return {
    race: raceName,
    standings: newStandings,
    hasSprint: sprintResults.length > 0
  };
};

export const calculatePointsDifference = (driver1Id, driver2Id, currentStandings, racesRemaining) => {
  const driver1 = currentStandings.find(d => d.id === driver1Id);
  const driver2 = currentStandings.find(d => d.id === driver2Id);
  
  if (!driver1 || !driver2) return null;
  
  const pointsDifference = driver1.points - driver2.points;
  const racesLeft = racesRemaining.length;
  
  return {
    driver1,
    driver2,
    pointsNeeded: pointsDifference + 1,
    avgPerRace: (pointsDifference + 1) / racesLeft,
    racesLeft,
    maxPossiblePoints: racesLeft * (pointsSystem2025.race[1] + pointsSystem2025.sprint[1])
  };
};
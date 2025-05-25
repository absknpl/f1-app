import { currentStandings, racesRemaining, pointsSystem } from './f1Data';

export const calculateScenario = (raceName, raceResults) => {
  // Clone current standings to avoid mutation
  const newStandings = JSON.parse(JSON.stringify(currentStandings));
  
  // Find the race in racesRemaining
  const race = racesRemaining.find(r => r.name === raceName);
  
  if (!race) return null;
  
  // Calculate points for each driver based on race results
  raceResults.forEach(result => {
    if (!result.driver) return;
    
    const driver = newStandings.find(d => d.id === result.driver);
    if (!driver) return;
    
    const position = result.position;
    const points = pointsSystem[position] || 0;
    
    driver.points += points;
    
    // Update wins and podiums
    if (position === 1) driver.wins += 1;
    if (position <= 3) driver.podiums += 1;
    
    // Update last race result
    driver.lastRace = `${position}${getOrdinalSuffix(position)}`;
  });
  
  // Sort by points descending
  newStandings.sort((a, b) => b.points - a.points);
  
  return {
    race: raceName,
    standings: newStandings
  };
};

export const calculatePointsNeeded = (driver1Id, driver2Id) => {
  const driver1 = currentStandings.find(d => d.id === driver1Id);
  const driver2 = currentStandings.find(d => d.id === driver2Id);
  
  if (!driver1 || !driver2) return null;
  
  const pointsDifference = driver1.points - driver2.points;
  const racesLeft = racesRemaining.length;
  
  return {
    driver1,
    driver2,
    pointsNeeded: pointsDifference + 1, // Need to be at least 1 point ahead
    avgPerRace: (pointsDifference + 1) / racesLeft,
    racesLeft
  };
};

const getOrdinalSuffix = (num) => {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
};
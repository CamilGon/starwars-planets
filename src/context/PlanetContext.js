import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

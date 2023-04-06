import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [planetsFiltered, setPlanetsFiltered] = useState(listPlanets);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const planets = data.results;
      setListPlanets(planets);
      const newplanetsFiltered = planets
        .filter((planet) => planet.name.includes(filterByName));
      setPlanetsFiltered(newplanetsFiltered);
    };
    fetchPlanets();
  }, [filterByName]);

  const values = useMemo(() => ({
    listPlanets,
    filterByName,
    setfilterByName,
    planetsFiltered,
    setPlanetsFiltered,
  }), [
    listPlanets,
    filterByName,
    planetsFiltered,
  ]);
  return (
    <PlanetContext.Provider value={ values }>
      { children }
    </PlanetContext.Provider>
  );
}
PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetProvider;

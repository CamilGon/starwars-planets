import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [planetsFiltered, setPlanetsFiltered] = useState(listPlanets);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterGroup, setFilterGroup] = useState({
    column: '',
    comparison: '',
    valueFilter: 0,
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const planets = data.results;
      setListPlanets(planets);
      console.log();
      const newplanetsFiltered = planets
        .filter((planet) => planet.name.includes(filterByName.toLowerCase()));
      setPlanetsFiltered(newplanetsFiltered);
    };
    fetchPlanets();
  }, [filterByName]);

  useEffect(() => {
    const comparisonBy = {
      'maior que': (a, b) => a > b,
      'menor que': (a, b) => a < b,
      'igual a': (a, b) => a === b,
    };

    if (filterGroup.column) {
      const newFilterGroup = listPlanets
        .filter((planet) => comparisonBy[filterGroup.comparison](
          Number(planet[filterGroup.column]),
          Number(filterGroup.valueFilter),
        ));
      setPlanetsFiltered(newFilterGroup);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterGroup]);

  const values = useMemo(() => ({
    listPlanets,
    filterByName,
    planetsFiltered,
    column,
    comparison,
    valueFilter,
    filterGroup,
    setfilterByName,
    setPlanetsFiltered,
    setColumn,
    setComparison,
    setValueFilter,
    setFilterGroup,
  }), [
    listPlanets,
    filterByName,
    planetsFiltered,
    column,
    comparison,
    valueFilter,
    filterGroup,
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

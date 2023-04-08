import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [column, setColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [selectedColunm, setSelectedColunm] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterGroup, setFilterGroup] = useState(
    { selectedColunm: '',
      comparison: { },
      valueFilter: 0 },
  );

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const planets = data.results.map((e) => {
        delete e.residents;
        return e;
      });
      setListPlanets(planets);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const newplanetsFiltered = listPlanets
      .filter((planet) => planet.name.includes(filterByName.toLowerCase()));
    setPlanetsFiltered(newplanetsFiltered);
  }, [listPlanets, filterByName]);

  useEffect(() => {
    const comparisonBy = {
      'maior que': (a, b) => a > b,
      'menor que': (a, b) => a < b,
      'igual a': (a, b) => a === b,
    };

    if (filterGroup.selectedColunm) {
      console.log(filterGroup.selectedColunm);
      const newFilterGroup = planetsFiltered
        .filter((planet) => comparisonBy[filterGroup.comparison](
          Number(planet[filterGroup.selectedColunm]),
          Number(filterGroup.valueFilter),
        ));
      setPlanetsFiltered(newFilterGroup);
      setSelectedColunm(column[0]);
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
    selectedColunm,
    setSelectedColunm,
    setfilterByName,
    setPlanetsFiltered,
    setColumn,
    setComparison,
    setValueFilter,
    setFilterGroup,
  }), [
    selectedColunm,
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

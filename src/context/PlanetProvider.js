/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [selectedColunm, setSelectedColunm] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterGroup, setFilterGroup] = useState();
  const [allFilter, setAllFilter] = useState([]);
  const [orderColumn, setOrderColumn] = useState({ order:
    { column: 'population', sort: 'ASC' } });
  const [update, setUpdate] = useState(false);

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
    if (filterGroup) {
      setAllFilter([...allFilter, filterGroup]);
    }
    setSelectedColunm(columns[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterGroup]);
  useEffect(() => {
    if (allFilter.length === 0) {
      setPlanetsFiltered(listPlanets);
      return;
    }
    const comparisonBy = {
      'maior que': (a, b) => a > b,
      'menor que': (a, b) => a < b,
      'igual a': (a, b) => a === b,
    };

    let listTwo = listPlanets;
    allFilter.forEach((filtro) => {
      listTwo = listTwo
        .filter((planet) => comparisonBy[filtro.comparison](
          Number(planet[filtro.selectedColunm]),
          Number(filtro.valueFilter),
        ));
    });
    setPlanetsFiltered(listTwo);
  }, [allFilter]);

  const values = useMemo(() => ({
    listPlanets,
    filterByName,
    planetsFiltered,
    columns,
    comparison,
    valueFilter,
    filterGroup,
    selectedColunm,
    allFilter,
    orderColumn,
    update,
    setUpdate,
    setOrderColumn,
    setAllFilter,
    setSelectedColunm,
    setfilterByName,
    setPlanetsFiltered,
    setColumns,
    setComparison,
    setValueFilter,
    setFilterGroup,
  }), [
    update,
    orderColumn,
    allFilter,
    selectedColunm,
    listPlanets,
    filterByName,
    planetsFiltered,
    columns,
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

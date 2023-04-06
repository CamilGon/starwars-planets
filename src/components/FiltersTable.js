import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function FiltersTable() {
  const {
    filterByName,
    setfilterByName,
    column,
    comparison,
    valueFilter,
    setColumn,
    setComparison,
    setValueFilter,
    setFilterGroup,
  } = useContext(PlanetContext);
  return (
    <form>
      <hr />
      <input
        type="text"
        value={ filterByName }
        data-testid="name-filter"
        onChange={ (e) => setfilterByName(e.target.value) }
        placeholder="Filter by name..."
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="otation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        type="button"
        onClick={ () => {
          setFilterGroup({
            column,
            comparison,
            valueFilter,
          });
        } }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <hr />
    </form>

  );
}

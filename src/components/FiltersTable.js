import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function FiltersTable() {
  const {
    listPlanets,
    filterByName,
    setfilterByName,
    column,
    comparison,
    valueFilter,
    setSelectedColunm,
    setComparison,
    setValueFilter,
    setFilterGroup,
    selectedColunm,
    setColumn,
    setPlanetsFiltered,
    setAllFilter,
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
        value={ selectedColunm }
        onChange={ (e) => setSelectedColunm(e.target.value) }
      >
        { column.map((option) => (
          <option value={ option } key={ option }>{option}</option>
        ))}
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
            selectedColunm,
            comparison,
            valueFilter,
          });
          setColumn(column.filter((option) => option !== selectedColunm));
        } }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setPlanetsFiltered(listPlanets);
          setAllFilter([]);
        } }
      >
        Remover todas filtragens
      </button>
      <hr />
    </form>

  );
}

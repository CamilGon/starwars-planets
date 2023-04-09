import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function FiltersTable() {
  const {
    listPlanets,
    planetsFiltered,
    filterByName,
    setfilterByName,
    columns,
    comparison,
    valueFilter,
    setSelectedColunm,
    setComparison,
    setValueFilter,
    setFilterGroup,
    selectedColunm,
    setColumns,
    setPlanetsFiltered,
    setAllFilter,
    setOrderColumn,
    orderColumn,
    update,
    setUpdate,
  } = useContext(PlanetContext);
  const columnSort = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  useEffect(() => {}, [update]);

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
        { columns.map((option) => (
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
          setColumns(columns.filter((option) => option !== selectedColunm));
        } }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <section>
        <select
          name=""
          id=""
          data-testid="column-sort"
          onChange={ (e) => setOrderColumn({ order:
            { ...orderColumn.order, column: e.target.value } }) }
        >
          { columnSort.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))}
        </select>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sort-radios"
          onChange={ (e) => setOrderColumn({ order:
            { ...orderColumn.order, sort: e.target.value } }) }
        />
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sort-radios"
          onChange={ (e) => setOrderColumn({ order:
            { ...orderColumn.order, sort: e.target.value } }) }
        />
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => {
            const { order: { column, sort } } = orderColumn;
            const unknown = planetsFiltered
              .filter((planet) => planet[column] === 'unknown');
            const notUnknown = planetsFiltered
              .filter((planet) => planet[column] !== 'unknown');

            if (sort === 'ASC') {
              const orderPlanets = notUnknown.sort((a, b) => a[column] - b[column]);
              setPlanetsFiltered([...orderPlanets, ...unknown]);
              setUpdate((e) => !e);
              return;
            }
            const orderPlanets = notUnknown.sort((a, b) => b[column] - a[column]);
            setPlanetsFiltered([...orderPlanets, ...unknown]);
            setUpdate((e) => !e);
          } }
        >
          Ordenar

        </button>
      </section>
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

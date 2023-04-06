import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function FiltersTable() {
  const { filterByName, setfilterByName } = useContext(PlanetContext);
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
      <hr />
    </form>

  );
}

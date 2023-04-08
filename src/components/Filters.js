import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Filters() {
  const {
    allFilter,
    setAllFilter,
  } = useContext(PlanetContext);
  if (allFilter.length === 0) {
    return (<div />);
  }

  return (
    <section>
      {allFilter.map((filtro) => (
        <div
          key={ filtro.selectedColunm }
          data-testid="filter"
        >
          <p>
            {filtro.selectedColunm}
          </p>
          <p>
            {filtro.comparison}
          </p>

          <p>
            {filtro.valueFilter}
          </p>
          <button
            type="button"
            onClick={ () => {
              setAllFilter(allFilter
                .filter((e) => e.selectedColunm !== filtro.selectedColunm));
            } }
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}

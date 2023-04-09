import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanetContext from '../context/PlanetContext';
import Table from '../components/Table';

const mockContext = {
  planetsFiltered: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      films: ['A New Hope', 'The Phantom Menace'],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi.dev/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      films: ['A New Hope'],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.dev/api/planets/2/',
    },
  ],
};

describe('Testa se o component tabela renderza corretamente', () => {
  it('Testa se os cabeçalhos são exibidos corretamente', () => {
    render(
      <PlanetContext.Provider value={ mockContext }>
        <Table />
      </PlanetContext.Provider>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Surface Water')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(screen.getByText('Url')).toBeInTheDocument();
  });

  it('Testa se a quantidade de coluna é renderizada corretamente', () => {
    render(
      <PlanetContext.Provider value={ mockContext }>
        <Table />
      </PlanetContext.Provider>
    );
    expect(screen.getAllByTestId('planet-name')).toHaveLength(2);
    expect(screen.getAllByRole('cell')).toHaveLength(26);
  });
});

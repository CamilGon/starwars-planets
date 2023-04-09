import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import PlanetProvider from '../context/PlanetProvider';

describe('Testa se todos os elementos de App renderizam corretamente', () => {
  it('Testa renderização dos inputs de filtro', () => {
    render(
    <PlanetProvider>
      <App />
    </PlanetProvider>
    );
    const inputNameFilter = screen.getByTestId('name-filter');
    expect(inputNameFilter).toBeInTheDocument();
    const inputColumnFilter = screen.getByTestId('column-filter');
    expect(inputColumnFilter).toBeInTheDocument();
    const inputComparisonFilter = screen.getByTestId('comparison-filter');
    expect(inputComparisonFilter).toBeInTheDocument();
    const inputvalueFilter = screen.getByTestId('value-filter');
    expect(inputvalueFilter).toBeInTheDocument();
    const inputButtonFilter = screen.getByTestId('button-filter');
    expect(inputButtonFilter).toBeInTheDocument();
    const selectColumnSort = screen.getByTestId('column-sort');
    expect(selectColumnSort).toBeInTheDocument();
    const inputColumnSortasc = screen.getByTestId('column-sort-input-asc');
    expect(inputColumnSortasc).toBeInTheDocument();
    const inputColumnSortdesc = screen.getByTestId('column-sort-input-desc');
    expect(inputColumnSortdesc).toBeInTheDocument();
    const buttonColumnSort = screen.getByTestId('column-sort-button');
    expect(buttonColumnSort).toBeInTheDocument();
    const buttonRemoveFilters = screen.getByTestId('button-remove-filters');
    expect(buttonRemoveFilters).toBeInTheDocument();
  });
});
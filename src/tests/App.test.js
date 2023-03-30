import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';


describe('Testa o component Table', () => {
  it('Verifica se a tabela é renerizada', async () => {
    const { getByRole } = render(<Table />);
    const table = getByRole('table');
    expect(table).toBeInTheDocument();
  });
  it('Verificar se realiza requisição a API', async () => {
    render(<Table />);
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    expect(data.result).toBe();
  });
  it('Verifique se a tabela tem 13 colunas', async () => {
    render(<Table />);
    const headers = await screen.findAllByRole('columnheader');
    expect(headers).toHaveLength(13);
  });
});


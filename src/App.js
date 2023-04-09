import React from 'react';
import Filters from './components/Filters';
import FiltersTable from './components/FiltersTable';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>Star Wars Planets</h1>
      <FiltersTable />
      <Filters />
      <Table />
    </>
  );
}

export default App;

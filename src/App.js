import React from 'react';
import Filters from './components/Filters';
import FiltersTable from './components/FiltersTable';
import Table from './components/Table';

function App() {
  return (
    <>
      <FiltersTable />
      <Filters />
      <Table />
    </>
  );
}

export default App;

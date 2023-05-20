import React from 'react';
import DataTable from 'react-data-table-component';
import logo from './logo.svg';
import './App.css';

interface Row {
  id: number;
  title: string;
  year: string;
  name: string;
}

const columns = [
  {
    name: 'Title',
    selector: (row: Row) => row.title,
  },
  {
    name: 'Year',
    selector: (row: Row) => row.year,
  },
  {
    name: 'Name',
    selector: (row: Row) => row.name,
  }
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    name: 'stauburn99',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 5,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 6,
    title: 'Beetlejuice',
    year: '1988',
    name: 'stauburn99',
  },
  {
    id: 7,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 8,
    title: 'Beetlejuice',
    year: '1988',
    name: 'stauburn99',
  },
  {
    id: 9,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
  {
    id: 10,
    title: 'Beetlejuice',
    year: '1988',
    name: 'stauburn99',
  },
  {
    id: 11,
    title: 'Ghostbusters',
    year: '1984',
    name: 'stauburn99',
  },
]

function App() {
  return (
    <div className="App">
      <DataTable
        title="Movie List"
        columns={columns}
        data={data}
        selectableRows
        pagination
      />
    </div>
  );
}

export default App;

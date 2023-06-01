import React from 'react';
import MUIDataTable, { FilterType } from 'mui-datatables';
import Container from '@mui/material/Container';

const columns = [
  'Datetime',
  'Wallet',
  'Ballence',
  {
    name: 'Action',
    options: {
      customBodyRender: (value: string, tableMeta: { rowIndex: number, columnIndex: number }) => {
        const action = value.toLowerCase();
        const cellColor = action === 'buy' ? 'green' : '#ec407a';
        return <span style={{ color: cellColor, fontWeight: 'bold' }}>{value}</span>;
      },
    },
  },
  'Token',
  'Value',
  'Token',
  'Balance Input',
  'Links',
];

const data = [
  ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '7.5%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x523...37d2', '3.52', 'Buy', 'Ben', '0.33', '255', '10.15%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x2s6...26d2', '3.52', 'Sell', 'FUKBEN', '0.33', '533', '10.15%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x523...76d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '7.5%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '640', '10.15%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x925...36d2', '3.52', 'Sell', 'PSYOP', '0.33', '533', '7.5%', 'TX'],
  ['18/05/2023 4:47:02 pm', '0x6dc...26d2', '3.52', 'Sell', 'Unibot', '0.33', '160', '10.15%', 'TX'],
];

const options = {
  filterType: 'checkbox' as FilterType,
};

function Tracker() {
  return (
    <div>
      <Container sx={{ padding: '30px 0px' }}>
        <MUIDataTable title={'Wallet Tracker'} data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}

export default Tracker;
